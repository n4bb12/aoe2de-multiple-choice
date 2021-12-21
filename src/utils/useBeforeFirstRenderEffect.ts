import { EffectCallback } from "react"
import { useIsMounted } from "./useIsMounted"

export function useBeforeFirstRenderEffect(effect: EffectCallback) {
  const mounted = useIsMounted()

  if (!mounted || !process.browser) {
    effect()
  }
}
