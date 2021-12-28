import { useEffect } from "react"

let instance: WakeLockSentinel | undefined

async function aquireLock() {
  try {
    if ("wakeLock" in navigator && !instance) {
      instance = await navigator.wakeLock.request("screen")
    }
  } catch (error) {
    console.error(error)
  }
}

function releaseLock() {
  try {
    instance?.release()
    instance = undefined
  } catch (error) {
    console.error(error)
  }
}

function updateLock() {
  if (document.hidden) {
    releaseLock()
  } else {
    aquireLock()
  }
}

function handleVisibilityChange() {
  updateLock()
}

export function useWakeLock() {
  useEffect(() => {
    const eventListenerArgs = [
      "visibilitychange",
      handleVisibilityChange,
      false,
    ] as const

    document.addEventListener(...eventListenerArgs)
    updateLock()

    return () => {
      document.removeEventListener(...eventListenerArgs)
      releaseLock()
    }
  }, [])
}
