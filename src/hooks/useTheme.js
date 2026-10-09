import { useEffect, useSyncExternalStore } from 'react';

const storageKey = 'theme';
const darkQuery = '(prefers-color-scheme: dark)';
// page background per theme, mirrored into the browser's theme-color
const background = { light: '#e9e5ee', dark: '#0f0a15' };

const systemTheme = () =>
  window.matchMedia && window.matchMedia(darkQuery).matches ? 'dark' : 'light';

const subscribeSystem = (onChange) => {
  if (!window.matchMedia) return () => {};
  const media = window.matchMedia(darkQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
};

// used when storage is blocked; the choice then lasts for this visit only
let unsavedChoice = null;
const listeners = new Set();

// the visitor's own choice, or null while they follow the system
const savedTheme = () => {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return unsavedChoice;
  }
};

const saveTheme = (choice) => {
  unsavedChoice = choice;
  try {
    if (choice) localStorage.setItem(storageKey, choice);
    else localStorage.removeItem(storageKey);
  } catch {
    // kept in unsavedChoice instead
  }
  listeners.forEach((listener) => listener());
};

const subscribeChoice = (onChange) => {
  listeners.add(onChange);
  window.addEventListener('storage', onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener('storage', onChange);
  };
};

const applyTheme = (choice) => {
  const root = document.documentElement;
  if (choice) root.setAttribute('data-theme', choice);
  else root.removeAttribute('data-theme');
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    const own = (meta.media || '').includes('dark') ? 'dark' : 'light';
    meta.setAttribute('content', background[choice || own]);
  });
};

function useTheme() {
  // the prerendered markup cannot know either, so it assumes a light system
  const choice = useSyncExternalStore(subscribeChoice, savedTheme, () => null);
  const system = useSyncExternalStore(
    subscribeSystem,
    systemTheme,
    () => 'light',
  );

  // read the saved value itself: while the prerendered markup is being picked
  // up, `choice` is still the assumed one and would undo a saved theme
  useEffect(() => applyTheme(savedTheme()), [choice]);

  const theme = choice || system;

  // picking the theme the system already uses goes back to following it
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    saveTheme(next === system ? null : next);
  };

  return { theme, toggleTheme };
}

export default useTheme;
