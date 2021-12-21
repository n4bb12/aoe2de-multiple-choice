import React, { FC } from "react"
import { MainLayout } from "src/components/MainLayout"
import { Queue } from "src/components/Queue"

const Page: FC = () => {
  return (
    <MainLayout>
      <Queue />
    </MainLayout>
  )
}

export default Page
