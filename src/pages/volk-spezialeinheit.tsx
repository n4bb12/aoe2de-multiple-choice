import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildCivToSpecialUnitQueue } from "src/queue/buildCivToSpecialUnitQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Volk &#10146; Spezialeinheit" />
      <Queue buildQueueData={buildCivToSpecialUnitQueue} />
    </>
  )
}

export default Page
