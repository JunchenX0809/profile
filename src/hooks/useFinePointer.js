import { useMediaQuery } from './useMediaQuery.js'

// True on devices with a precise, hovering pointer (a mouse or trackpad), false on touch screens.
export function useFinePointer() {
  return useMediaQuery('(hover: hover) and (pointer: fine)')
}
