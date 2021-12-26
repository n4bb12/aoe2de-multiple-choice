import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildCivToSpecialUnitQueue } from "src/queue/buildCivToSpecialUnitQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildCivToSpecialUnitQueue} />
}

export default Page
