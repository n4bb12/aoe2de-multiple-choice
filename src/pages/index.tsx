import { GetServerSideProps } from "next"
import React, { FC, Fragment } from "react"
import { Button } from "src/components/Button"
import { routes } from "src/config"
import { getRandomBackground } from "src/data/backgrounds"
import { civs } from "src/data/civs"
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

      <div className="hidden">
        {civs.map((civ, index) => (
          <Fragment key={index}>
            <img src={civ.icon} alt={civ.name} />
            {civ.specialUnits.map((unit, index) => (
              <Fragment key={index}>
                <img src={unit.icon} alt={unit.name} />
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Page
