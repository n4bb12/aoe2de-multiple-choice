import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildSpecialUnitToCivQueue } from "src/queue/buildSpecialUnitToCivQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Spezialeinheit &#10146; Volk" />
      <Queue buildQueueData={buildSpecialUnitToCivQueue} />
    </>
  )
}

export default Page
