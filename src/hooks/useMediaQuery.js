import { useCallback, useSyncExternalStore } from 'react'

// Live result of a CSS media query. Reports false at build time (prerendering)
// and during hydration, so the first browser render matches the built HTML;
// React re-renders with the real value right after.
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (onChange) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    },
    [query],
  )
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
