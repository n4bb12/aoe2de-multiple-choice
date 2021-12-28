import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildSummaryToCivQueue } from "src/queue/buildSummaryToCivQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Kurzbeschreibung &#10146; Volk" />
      <Queue buildQueueData={buildSummaryToCivQueue} />
    </>
  )
}

export default Page
