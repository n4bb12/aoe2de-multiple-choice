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
    <header>
      <Card>
        <nav className="p-4">
          <ul className="text-center">
            <li>
              <A
                href="/"
                className="hover:underline underline-offset-2 decoration-blue-700"
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
