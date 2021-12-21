import { GetStaticProps } from "next"
import React, { FC } from "react"
import { MainLayout } from "src/components/MainLayout"
import { Queue } from "src/components/Queue"
import { backgrounds } from "src/data/backgrounds"
import { SharedPageProps } from "src/data/shared"

type PageProps = SharedPageProps

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)]

  return {
    props: {
      background: randomBackground,
    },
  }
}

const Page: FC = () => {
  return (
    <MainLayout>
      <Queue />
    </MainLayout>
  )
}

export default Page
