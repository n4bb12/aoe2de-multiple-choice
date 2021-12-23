import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildQueueData } from "src/queue/buildTeamBonusQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildQueueData} />
}

export default Page
