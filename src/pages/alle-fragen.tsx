import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildMixedQueue } from "src/queue/buildMixedQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Alle Fragen" />
      <Queue buildQueueData={buildMixedQueue} />
    </>
  )
}

export default Page
