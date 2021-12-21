import { GetStaticProps } from "next"
import React, { FC } from "react"
import { Button } from "src/components/Button"
import { routes } from "src/config"
import { getRandomBackground } from "src/data/backgrounds"
import { SharedPageProps } from "src/data/shared"

type PageProps = SharedPageProps

export const getStaticProps: GetStaticProps<PageProps> = async (context) => {
  return {
    props: {
      background: getRandomBackground(),
    },
  }
}

const Page: FC = () => {
  return (
    <Button as="link" href={routes.civs}>
      Wappen
    </Button>
  )
}

export default Page
