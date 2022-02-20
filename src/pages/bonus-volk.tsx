import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildBonusToCivQueue } from "src/queue/buildBonusToCivQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Bonus ➢ Volk" />
      <Queue buildQueueData={buildBonusToCivQueue} />
    </>
  )
}

export default Page
