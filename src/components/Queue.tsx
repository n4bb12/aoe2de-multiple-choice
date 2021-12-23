import React, { FC, useEffect, useState } from "react"
import { MultipleChoice } from "src/components/MultipleChoice"
import { QueueData } from "src/queue/types"

export type QueueProps = {
  buildQueueData: () => QueueData
}

export const Queue: FC<QueueProps> = ({ buildQueueData }) => {
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
    // We only want to run this once on initial render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!queue.length) {
    return null
  }

  return <MultipleChoice {...queue[queueIndex]()} onContinue={onContinue} />
}
