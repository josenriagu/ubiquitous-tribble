// Create global styles using styled components to be injected into components.
import { createGlobalStyle, css } from 'styled-components';
import { screens, sizes } from './variables';

const darkTokens = css`
  --bg: #0f0a15;
  --surface: #1c1526;
  --ink: #efe9f5;
  --muted: #a99db8;
  --line: #33283e;
  --gold: #e0ac2b;
  --gold-ink: #e7b93f;
  --violet: #b196f5;
  --bar: #4d3f5c;
  --dark: #271c34;
  --shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 14px 32px -14px rgba(0, 0, 0, 0.7);
  --shadow-up:
    inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 28px 48px -18px rgba(0, 0, 0, 0.9);
  --glow: rgba(224, 172, 43, 0.14);
  --proj-line: #3d3049;
  --shot-filter: brightness(0.86);
  color-scheme: dark;
`;

/* Layout: a bento grid. Twelve columns on desktop, six on tablet, one on a
   phone; every block is a rounded tile. */
const GlobalStyle = createGlobalStyle`
:root {
   --bg: #e9e5ee;
   --surface: #ffffff;
   --ink: #1c1326;
   --muted: #62576f;
   --line: #ddd6e5;
   --gold: #c6930a;
   --gold-ink: #7d5900;
   --violet: #603cba;
   --bar: #b9aecb;
   --dark: #1c1326;
   --dark-fg: #f1ebf7;
   --dark-muted: #b9adc8;
   --dark-line: #3d3049;
   --dark-gold: #e7b93f;
   --ring: var(--violet);
   --proj-line: rgba(28, 19, 38, 0.1);
   --shot-filter: none;
   --glass: rgba(24, 16, 33, 0.88);
   --pill: rgba(24, 16, 33, 0.8);
   --shadow: 0 1px 2px rgba(28, 19, 38, 0.06), 0 14px 32px -14px rgba(28, 19, 38, 0.22);
   --shadow-up: 0 2px 4px rgba(28, 19, 38, 0.08), 0 28px 48px -18px rgba(28, 19, 38, 0.34);
   --glow: rgba(198, 147, 10, 0.16);

   --display: 'Bricolage Grotesque Variable', 'Avenir Next', 'Segoe UI', sans-serif;
   --body: 'Hanken Grotesk Variable', 'Helvetica Neue', Arial, sans-serif;
   --mono: 'JetBrains Mono Variable', ui-monospace, 'SF Mono', Menlo, monospace;

   --radius: 1.75rem;
   --pad: clamp(1.25rem, 2.4vw, 2rem);
   --gap: 1rem;
   --ease: cubic-bezier(0.2, 0.7, 0.2, 1);

   color-scheme: light;
}
/* follow the system theme; data-theme lets a manual switch override it */
@media (prefers-color-scheme: dark) {
   :root:not([data-theme='light']) {
      ${darkTokens}
   }
}
:root[data-theme='dark'] {
   ${darkTokens}
}
*, *::after, *::before {
   box-sizing: border-box;
}
body {
   margin: 0;
   background: var(--bg);
   color: var(--ink);
   font-family: var(--body);
   font-size: 1rem;
   line-height: 1.55;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   transition: background-color 0.35s ease, color 0.35s ease;
   @media ${screens.reducedMotion} {
      transition: none;
   }
}
h1, h2, h3, p, ul, dl, dd {
   margin: 0;
}
ul {
   padding: 0;
   list-style: none;
}
a {
   color: inherit;
   text-decoration-color: var(--gold);
   text-decoration-thickness: 2px;
   text-underline-offset: 0.2em;
   /* this line disables the blue highlight when touched in mobile chromium browsers */
   -webkit-tap-highlight-color: transparent;
   &:hover {
      color: var(--gold-ink);
   }
}
:focus-visible {
   outline: 2px solid var(--ring);
   outline-offset: 3px;
   border-radius: 4px;
}
/* keeps the focus ring clear of the viewport edge */
a, button {
   scroll-margin: 1.5rem;
}
.sr-only {
   position: absolute;
   width: 1px;
   height: 1px;
   margin: -1px;
   padding: 0;
   overflow: hidden;
   clip-path: inset(50%);
   white-space: nowrap;
   border: 0;
}
.wrap {
   max-width: ${sizes.measure};
   margin-inline: auto;
   padding-inline: clamp(16px, 3vw, 32px);
   padding-block: clamp(1rem, 3vw, 2rem) 2.5rem;
}
.bento {
   display: grid;
   gap: var(--gap);
   grid-template-columns: minmax(0, 1fr);
   > * {
      animation: rise 0.7s var(--ease) backwards;
   }
   /* The first tile holds the page's main text, so it rises without fading:
      text that starts invisible is not counted as shown until the fade ends. */
   > :first-child { animation-name: lift; }
   > :nth-child(2) { animation-delay: 0.06s; }
   > :nth-child(3) { animation-delay: 0.12s; }
   > :nth-child(4) { animation-delay: 0.18s; }
   > :nth-child(5) { animation-delay: 0.24s; }
   > :nth-child(6) { animation-delay: 0.3s; }
   > :nth-child(7) { animation-delay: 0.36s; }
   > :nth-child(n + 8) { animation-delay: 0.42s; }
   @media ${screens.tablet} {
      grid-template-columns: repeat(6, minmax(0, 1fr));
      > * {
         grid-column: span var(--t, 6);
      }
   }
   @media ${screens.desktop} {
      grid-template-columns: repeat(12, minmax(0, 1fr));
      > * {
         grid-column: span var(--d, 12);
      }
   }
   @media ${screens.reducedMotion} {
      > *,
      > :first-child {
         animation: none;
      }
   }
}
@keyframes rise {
   from {
      opacity: 0;
      transform: translateY(16px) scale(0.985);
   }
}
@keyframes lift {
   from {
      transform: translateY(16px) scale(0.985);
   }
}
@keyframes fadein {
   from {
      opacity: 0;
   }
}
.tile {
   position: relative;
   isolation: isolate;
   overflow: hidden;
   background: var(--surface);
   border: 1px solid var(--line);
   border-radius: var(--radius);
   padding: var(--pad);
   min-width: 0;
   box-shadow: var(--shadow);
   transition: transform 0.35s var(--ease), box-shadow 0.35s ease, border-color 0.35s ease;
   &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-up);
   }
   /* A soft light that follows the pointer, painted behind the tile's content.
      It must exist only on hover: a permanent layer over the tile stops
      contrast checkers from judging the text on it. */
   &:hover::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: -1;
      pointer-events: none;
      animation: fadein 0.4s ease backwards;
      background: radial-gradient(22rem circle at var(--mx, 50%) var(--my, 50%), var(--glow), transparent 60%);
   }
   @media ${screens.reducedMotion} {
      transition: none;
      &:hover {
         transform: none;
      }
   }
}
.tile > h2 {
   font-family: var(--display);
   font-weight: 700;
   font-size: 1.5rem;
   letter-spacing: -0.02em;
   line-height: 1.15;
}
.label {
   font-family: var(--mono);
   font-size: 0.75rem;
   font-weight: 500;
   letter-spacing: 0.08em;
   text-transform: uppercase;
   color: var(--muted);
}
.sub {
   color: var(--muted);
   margin-top: 0.25rem;
}
`;

export default GlobalStyle;
