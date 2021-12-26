import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildCivToBonusQueue } from "src/queue/buildCivToBonusQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildCivToBonusQueue} />
}

export default Page
