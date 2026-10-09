# josemarianriagu.com

Personal portfolio of Josemaria Nriagu. A single page built with React, styled-components and Vite.

## Requirements

Node 24 or newer. The version is pinned in `.nvmrc`, so `nvm use` picks it up.

## Scripts

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads as you edit.

### `npm test`

Runs the Vitest suite in watch mode. Use `npm test -- --run` for a single pass.

### `npm run build`

Builds the app for production into the `build` folder. `scripts/build.js` bundles it with Vite, prerenders the page into `build/index.html` so it arrives as finished HTML, and trims the font files to the characters and weights the page uses.

### `npm run preview`

Serves the production build locally, to check it before deploying.

### `npm run lint`

Checks the source with ESLint.

### `npm run prettify`

Formats the source with Prettier.

## Configuration

`VITE_CONTACT_EMAIL` sets the address the "Say hello" button writes to. It is optional: without it the default in `src/components/Talk/Talk.jsx` is used. The address is only ever a link target and is never shown on the page.

## Where things live

- `index.html` holds the page metadata: description, Open Graph and Twitter tags and structured data.
- `src/App.jsx` lays the tiles out on the bento grid, in order.
- `src/components` has one folder per tile. Content sits in a data file beside each component, for example `Projects/projectList.js`, `Experience/roles.js`, `Toolkit/toolkitList.js` and `Archive/archiveList.js`.
- `src/styles/GlobalStyles.js` defines the colour and font tokens for the light and dark themes, the grid and the shared tile styles.
- `src/assets` holds the avatar and the screenshots shown on the project cards.
- `public` holds the favicons, the web manifest and the social share image.
