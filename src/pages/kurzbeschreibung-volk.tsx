import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildSummaryToCivQueue } from "src/queue/buildSummaryToCivQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildSummaryToCivQueue} />
}

export default Page
