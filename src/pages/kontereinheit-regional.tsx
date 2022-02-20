import { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildRegionalUnitCountersQueue } from "src/queue/buildRegionalUnitCountersQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Kontereinheiten — Normal, Regional" />
      <Queue buildQueueData={buildRegionalUnitCountersQueue} />
    </>
  )
}

export default Page
