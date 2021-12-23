import { GetServerSideProps } from "next"
import React, { FC } from "react"
import { Button } from "src/components/Button"
import { routes } from "src/config"
import { getRandomBackground } from "src/data/backgrounds"
import { SharedPageProps } from "src/data/shared"

type PageProps = SharedPageProps

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context,
) => {
  return {
    props: {
      background: getRandomBackground(),
    },
  }
}

const Page: FC = () => {
  return (
    <div className="grid gap-2">
      <Button as="link" href={routes.crests}>
        Wappen
      </Button>
      <Button as="link" href={routes.teamBonuses}>
        Team-Boni
      </Button>
      <Button as="link" href={routes.specialUnits}>
        Spezialeinheiten
      </Button>
    </div>
  )
}

export default Page
