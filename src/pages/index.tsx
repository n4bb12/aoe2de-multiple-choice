import React, { FC } from "react"
import { Button } from "src/components/Button"

const Page: FC = () => {
  return (
    <div className="grid gap-2">
      <Button as="link" href="/wappen">
        Wappen
      </Button>
      <Button as="link" href="/kurbeschreibungen">
        Kurbeschreibungen
      </Button>
      <Button as="link" href="/spezialeinheiten">
        Spezialeinheiten
      </Button>
      <Button as="link" href="/team-boni">
        Team-Boni
      </Button>
    </div>
  )
}

export default Page
