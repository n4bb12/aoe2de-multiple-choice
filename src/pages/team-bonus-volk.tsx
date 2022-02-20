import { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildTeamBonusToCivQueue } from "src/queue/buildTeamBonusToCivQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Team-Bonus ➢ Volk" />
      <Queue buildQueueData={buildTeamBonusToCivQueue} />
    </>
  )
}

export default Page
