import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildCivToCrestQueue } from "src/queue/buildCivToCrestQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Volk ➢ Wappen" />
      <Queue buildQueueData={buildCivToCrestQueue} />
    </>
  )
}

export default Page
