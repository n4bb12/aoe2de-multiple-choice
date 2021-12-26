import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildCivToSummaryQueue } from "src/queue/buildCivToSummaryQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildCivToSummaryQueue} />
}

export default Page
