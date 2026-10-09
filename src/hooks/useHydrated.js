import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};

// false in the prerendered markup and while it is being picked up in the
// browser, true from then on; for content only the visitor's browser can know
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export default useHydrated;
