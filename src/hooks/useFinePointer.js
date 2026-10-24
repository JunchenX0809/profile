import { useSyncExternalStore } from 'react'

// True on devices with a precise, hovering pointer (a mouse or trackpad), false on touch screens.
const query = '(hover: hover) and (pointer: fine)'

function subscribe(onChange) {
  const media = window.matchMedia(query)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

export function useFinePointer() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
}
