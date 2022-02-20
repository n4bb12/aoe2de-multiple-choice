import { FC } from "react"
import { Head } from "src/components/Head"
import { Queue } from "src/components/Queue"
import { buildCrestToCivQueue } from "src/queue/buildCrestToCivQueue"

const Page: FC = () => {
  return (
    <>
      <Head title="Wappen ➢ Volk" />
      <Queue buildQueueData={buildCrestToCivQueue} />
    </>
  )
}

export default Page
