import { useSyncExternalStore } from 'react';

let now = Date.now();

const subscribe = (onChange) => {
  const id = setInterval(() => {
    now = Date.now();
    onChange();
  }, 30000);
  return () => clearInterval(id);
};

const getSnapshot = () => now;

// The page is prerendered at build time, so the markup starts from the build's
// clock and catches up with the visitor's once the page is interactive.
const getBuildSnapshot = () => __BUILD_TIME__;

// the current date, refreshed every half minute
function useNow() {
  return new Date(
    useSyncExternalStore(subscribe, getSnapshot, getBuildSnapshot),
  );
}

export default useNow;
