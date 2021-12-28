import React, { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildCivToBonusQueue } from "src/queue/buildCivToBonusQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Volk &#10146; Bonus" />
      <Queue buildQueueData={buildCivToBonusQueue} />
    </>
  )
}

export default Page
