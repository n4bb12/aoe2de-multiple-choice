import React, { FC, Fragment } from "react"
import { Button } from "src/components/Button"
import { routes } from "src/config"
import { civs } from "src/data/civs"

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
