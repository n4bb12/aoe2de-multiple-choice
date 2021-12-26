import React, { FC } from "react"
import { Button } from "src/components/Button"

const LeftButton: typeof Button = ({ children, ...props }) => (
  <Button {...props}>
    <div className="px-3 text-right">{children}</div>
  </Button>
)

const RightButton: typeof Button = ({ children, ...props }) => (
  <Button {...props}>
    <div className="px-3 text-left">{children}</div>
  </Button>
)

const Page: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <LeftButton as="link" href="/wappen-volk">
        Wappen 🠖 Volk
      </LeftButton>
      <RightButton as="link" href="/volk-wappen">
        Volk 🠖 Wappen
      </RightButton>

      <LeftButton as="link" href="/kurzbeschreibung-volk">
        Kurzbeschreibung 🠖 Volk
      </LeftButton>
      <RightButton as="link" href="/volk-kurzbeschreibung">
        Volk 🠖 Kurzbeschreibung
      </RightButton>

      <LeftButton as="link" href="/spezialeinheit-volk">
        Spezialeinheit 🠖 Volk
      </LeftButton>
      <RightButton as="link" href="/volk-spezialeinheit">
        Volk 🠖 Spezialeinheit
      </RightButton>

      <LeftButton as="link" href="/bonus-volk">
        Bonus 🠖 Volk
      </LeftButton>
      <RightButton as="link" href="/volk-bonus">
        Volk 🠖 Bonus
      </RightButton>

      <LeftButton as="link" href="/team-bonus-volk">
        Team-Bonus 🠖 Volk
      </LeftButton>
      <RightButton as="link" href="/volk-team-bonus">
        Volk 🠖 Team-Bonus
      </RightButton>
    </div>
  )
}

export default Page
