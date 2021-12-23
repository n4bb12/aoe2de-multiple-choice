import { GetStaticProps } from "next"
import React, { FC } from "react"
import { Queue } from "src/components/Queue"
import { getRandomBackground } from "src/data/backgrounds"
import { SharedPageProps } from "src/data/shared"
import { buildQueueData } from "src/queue/buildSpecialUnitQueue"

type PageProps = SharedPageProps

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  return {
    props: {
      background: getRandomBackground(),
    },
  }
}

const Page: FC = () => {
  return <Queue buildQueueData={buildQueueData} />
}

export default Page
