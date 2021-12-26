import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildBonusToCivQueue } from "src/queue/buildBonusToCivQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildBonusToCivQueue} />
}

export default Page
