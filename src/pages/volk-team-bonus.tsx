import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildCivToTeamBonusQueue } from "src/queue/buildCivToTeamBonusQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Volk ➢ Team-Bonus" />
      <Queue buildQueueData={buildCivToTeamBonusQueue} />
    </>
  )
}

export default Page
