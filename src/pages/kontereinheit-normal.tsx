import { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildCoreUnitCountersQueue } from "src/queue/buildCoreUnitCountersQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Kontereinheiten — Normal" />
      <Queue buildQueueData={buildCoreUnitCountersQueue} />
    </>
  )
}

export default Page
