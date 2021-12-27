import { useRouter } from "next/router"
import React, { FC } from "react"
import { A } from "./A"
import { Card } from "./Card"

export const Header: FC = () => {
  const router = useRouter()

  if (router.asPath === "/") {
    return <header />
  }

  return (
    <header className="row-start-2 sm:row-start-1">
      <Card>
        <nav className="p-4">
          <ul className="text-center">
            <li>
              <A
                href="/"
                className="fine:hover:underline underline-offset-2 decoration-blue-700"
              >
                Startseite
              </A>
            </li>
          </ul>
        </nav>
      </Card>
    </header>
  )
}
