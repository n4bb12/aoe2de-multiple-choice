import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { buildCivToTeamBonusQueue } from "src/queue/buildCivToTeamBonusQueue"

const Page: FC = () => {
  return <Queue buildQueueData={buildCivToTeamBonusQueue} />
}

export default Page
