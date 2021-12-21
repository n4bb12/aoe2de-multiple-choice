import React, { FC } from "react"
import { routes } from "src/config"
import { BaseLink } from "./BaseLink"
import { Card } from "./Card"

export const Header: FC = () => {
  return (
    <header>
      <Card>
        <nav className="p-4">
          <ul className="text-center">
            <li>
              <BaseLink href={routes.home} className="hover:underline">
                Startseite
              </BaseLink>
            </li>
          </ul>
        </nav>
      </Card>
    </header>
  )
}
