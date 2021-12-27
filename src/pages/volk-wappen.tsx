import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildCivToCrestQueue } from "src/queue/buildCivToCrestQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildCivToCrestQueue} />
}

export default Page