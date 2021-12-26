import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildTeamBonusToCivQueue } from "src/queue/buildTeamBonusToCivQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildTeamBonusToCivQueue} />
}

export default Page
