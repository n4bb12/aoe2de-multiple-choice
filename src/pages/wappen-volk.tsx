import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildCrestToCivQueue } from "src/queue/buildCrestToCivQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildCrestToCivQueue} />
}

export default Page
