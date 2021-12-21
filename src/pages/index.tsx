import { GetStaticProps } from "next"
import React, { FC } from "react"
import { Button } from "src/components/Button"
import { routes } from "src/config"
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
    <Button as="link" href={routes.queue}>
      Los geht's
    </Button>
  )
}

export default Page
