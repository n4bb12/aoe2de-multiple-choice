import { useEffect } from "react"

const always = () => true

let instance: WakeLockSentinel | undefined

async function aquireLock() {
  if ("wakeLock" in navigator && !instance) {
    instance = await navigator.wakeLock.request("screen")
  }
}

function releaseLock() {
  instance?.release()
  instance = undefined
}

export function useWakeLock(predicate = always) {
  useEffect(() => {
    if (predicate()) {
      aquireLock()
    } else {
      releaseLock()
    }
    return releaseLock
  }, [predicate])
}
