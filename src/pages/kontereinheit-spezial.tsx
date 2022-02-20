import { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildUniqueUnitCountersQueue } from "src/queue/buildUniqueUnitCountersQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Normal, Regional, Spezial" />
      <Queue buildQueueData={buildUniqueUnitCountersQueue} />
    </>
  )
}

export default Page
