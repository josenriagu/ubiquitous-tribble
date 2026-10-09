import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from './App';

// used by scripts/build.js to prerender the page into build/index.html
export function render() {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(sheet.collectStyles(<App />));
    return { html, styles: sheet.getStyleTags() };
  } finally {
    sheet.seal();
  }
}
