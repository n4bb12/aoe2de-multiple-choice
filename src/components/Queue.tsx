import React, { FC, useEffect, useState } from "react"
import { MultipleChoice } from "src/components/MultipleChoice"
import { QueueData, buildQueueData } from "src/queue/buildQueueData"

export const Queue: FC = () => {
  const [queue, setQueue] = useState<QueueData>([])
  const [queueIndex, setQueueIndex] = useState(0)

  function onContinue() {
    if (queueIndex >= queue.length - 1) {
      setQueue(buildQueueData())
      setQueueIndex(0)
    } else {
      setQueueIndex(queueIndex + 1)
    }
  }

  useEffect(() => {
    onContinue()
  }, [])

  if (!queue.length) {
    return null
  }

  return <MultipleChoice {...queue[queueIndex]()} onContinue={onContinue} />
}
