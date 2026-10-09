import { startTransition } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

// self-hosted fonts
import '@fontsource-variable/bricolage-grotesque/opsz.css';
import '@fontsource-variable/hanken-grotesk/wght.css';
import '@fontsource-variable/jetbrains-mono/wght.css';

const container = document.getElementById('root');

// the production build ships the page prerendered (see scripts/build.js);
// the dev server starts from an empty container
if (container.hasChildNodes()) {
  // as a transition, so picking up the markup is done in short slices and
  // never holds the main thread for long
  startTransition(() => {
    hydrateRoot(container, <App />);
  });
} else {
  createRoot(container).render(<App />);
}

// The site no longer ships a service worker. Retire the one earlier versions
// installed, so returning visitors are not served a cached copy of the old site.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((registrations) =>
      registrations.forEach((registration) => registration.unregister()),
    )
    .catch(() => {});
}
