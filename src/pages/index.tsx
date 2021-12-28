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
        Wappen &#10146; Volk
      </LeftButton>
      <RightButton as="link" href="/volk-wappen">
        Volk &#10146; Wappen
      </RightButton>

      <LeftButton as="link" href="/spezialeinheit-volk">
        Spezialeinheit &#10146; Volk
      </LeftButton>
      <RightButton as="link" href="/volk-spezialeinheit">
        Volk &#10146; Spezialeinheit
      </RightButton>

      <LeftButton as="link" href="/bonus-volk">
        Bonus &#10146; Volk
      </LeftButton>
      <RightButton as="link" href="/volk-bonus">
        Volk &#10146; Bonus
      </RightButton>

      <LeftButton as="link" href="/team-bonus-volk">
        Team-Bonus &#10146; Volk
      </LeftButton>
      <RightButton as="link" href="/volk-team-bonus">
        Volk &#10146; Team-Bonus
      </RightButton>

      <Button as="link" href="/alle-fragen" className="col-span-2">
        Alle Fragen
      </Button>
    </div>
  )
}

export default Page
