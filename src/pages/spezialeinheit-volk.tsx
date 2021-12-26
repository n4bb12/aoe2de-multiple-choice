import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildSpecialUnitToCivQueue } from "src/queue/buildSpecialUnitToCivQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildSpecialUnitToCivQueue} />
}

export default Page
