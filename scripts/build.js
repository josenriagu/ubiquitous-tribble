// Production build: bundle the app, then prerender it into build/index.html so
// the page arrives as finished HTML and CSS instead of waiting for JavaScript.
import { createHash } from 'node:crypto';
import { readFile, readdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import subsetFont from 'subset-font';
import { build } from 'vite';

const root = path.resolve(import.meta.dirname, '..');
const outDir = path.join(root, 'build');
const serverDir = path.join(root, '.prerender');

// both bundles must agree on the time, or the markup and the app would differ
process.env.BUILD_TIME = String(Date.now());

const fail = (message) => {
  throw new Error(`prerender: ${message}`);
};

await build({ root });
await build({
  root,
  logLevel: 'warn',
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: serverDir,
    emptyOutDir: true,
    copyPublicDir: false,
  },
  // bundled, because its CommonJS build has no usable default export in Node
  ssr: { noExternal: ['styled-components'] },
});

const { render } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
);
const { html, styles } = render();
await rm(serverDir, { recursive: true });

const indexPath = path.join(outDir, 'index.html');
let page = await readFile(indexPath, 'utf8');

const emptyRoot = '<div id="root"></div>';
if (!page.includes(emptyRoot)) fail('no empty #root in index.html');
if (!html.includes('<h1')) fail('the rendered page has no heading');
if (!styles.includes('<style')) fail('no component styles were collected');

// inline the small font stylesheet, saving a render-blocking request
const sheetLink =
  /<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/;
const sheet = page.match(sheetLink);
if (!sheet) fail('no stylesheet link in index.html');
let css = await readFile(path.join(outDir, sheet[1]), 'utf8');
await rm(path.join(outDir, sheet[1]));

// Trim the Latin font files to what the page can show: printable ASCII plus
// every other character in the prerendered markup, in the weights the design
// uses. A weight outside these ranges would be drawn at the nearest one kept,
// and text added by scripts must stay within the characters above.
const fonts = [
  { name: 'bricolage-grotesque-latin-opsz', wght: [400, 800], preload: true },
  { name: 'hanken-grotesk-latin-wght', wght: [400, 600], preload: true },
  { name: 'jetbrains-mono-latin-wght', wght: [400, 500], preload: false },
];
const ascii = Array.from({ length: 95 }, (_, i) => String.fromCharCode(32 + i));
const glyphs = [...new Set([...ascii, ...html])].join('');
const assetsDir = path.join(outDir, 'assets');
const assets = await readdir(assetsDir);
const preloads = [];

for (const font of fonts) {
  const file = assets.find(
    (asset) => asset.startsWith(font.name) && asset.endsWith('.woff2'),
  );
  if (!file) fail(`no font file for ${font.name}`);
  const [min, max] = font.wght;
  const subset = await subsetFont(
    await readFile(path.join(assetsDir, file)),
    glyphs,
    { targetFormat: 'woff2', variationAxes: { wght: { min, max } } },
  );
  // a new name for the new contents, so a cached copy is never mistaken for it
  const hash = createHash('sha256').update(subset).digest('hex').slice(0, 8);
  const trimmed = `${font.name}-normal-${hash}.woff2`;
  await rm(path.join(assetsDir, file));
  await writeFile(path.join(assetsDir, trimmed), subset);
  if (!css.includes(file)) fail(`${file} is not referenced by the stylesheet`);
  css = css.replaceAll(file, trimmed);
  // start downloading the fonts used at the top of the page straight away
  if (font.preload) {
    preloads.push(
      `<link rel="preload" as="font" type="font/woff2" href="/assets/${trimmed}" crossorigin />`,
    );
  }
}

// Start the app only once the prerendered page has painted, so the first
// paint never waits on JavaScript.
const entryTag =
  /<script type="module"[^>]*src="(\/assets\/[^"]+\.js)"><\/script>/;
const entry = page.match(entryTag);
if (!entry) fail('no entry script in index.html');
const loader = `<script>
      (function () {
        var started = false;
        function start() {
          if (started) return;
          started = true;
          import('${entry[1]}');
        }
        try {
          new PerformanceObserver(function (list, observer) {
            if (list.getEntriesByName('first-contentful-paint').length) {
              observer.disconnect();
              start();
            }
          }).observe({ type: 'paint', buffered: true });
        } catch (e) {
          start();
        }
        // a background tab does not paint; do not wait on it for long
        setTimeout(start, 3000);
      })();
    </script>`;

page = page
  .replace(entryTag, () => loader)
  .replace(
    sheetLink,
    () => `${preloads.join('\n    ')}\n    <style>${css.trim()}</style>`,
  )
  .replace('</head>', () => `  ${styles}\n  </head>`)
  .replace(emptyRoot, () => `<div id="root">${html}</div>`);

await writeFile(indexPath, page);
console.log(
  `prerendered build/index.html (${(Buffer.byteLength(page) / 1024).toFixed(1)} kB)`,
);
