import { useRouter } from "next/router"
import { FC } from "react"
import { A } from "./A"
import { Card } from "./Card"

const Content: FC = () => {
  const router = useRouter()

  if (router.asPath === "/") {
    return <>AOE2DE Fragen</>
  }

  return (
    <nav>
      <ul>
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
  )
}

export const Header: FC = () => {
  return (
    <header className="row-start-2 sm:row-start-1">
      <Card>
        <div className="p-4 text-center">
          <Content />
        </div>
      </Card>
    </header>
  )
}
