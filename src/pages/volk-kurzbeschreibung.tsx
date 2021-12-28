import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildCivToSummaryQueue } from "src/queue/buildCivToSummaryQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Volk &#10146; Kurzbeschreibung" />
      <Queue buildQueueData={buildCivToSummaryQueue} />
    </>
  )
}

export default Page
