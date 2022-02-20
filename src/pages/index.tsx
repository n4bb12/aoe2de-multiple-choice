import React, { FC } from "react"
import { AProps } from "src/components/A"
import { Button } from "src/components/Button"
import { Head } from "src/components/Head"

const LeftLink: FC<AProps> = ({ children, ...props }) => (
  <Button {...props} as="link">
    <div className="px-3 text-right">{children}</div>
  </Button>
)

const RightLink: FC<AProps> = ({ children, ...props }) => (
  <Button {...props} as="link">
    <div className="px-3 text-left">{children}</div>
  </Button>
)

const FullWidthLink: FC<AProps> = ({ children, ...props }) => (
  <Button {...props} as="link" className="col-span-2">
    <div className="px-3 text-center">{children}</div>
  </Button>
)

const Links: FC = () => (
  <div className="grid grid-cols-2 gap-2">
    <LeftLink href="/wappen-volk">Wappen &#10146; Volk</LeftLink>
    <RightLink href="/volk-wappen">Volk &#10146; Wappen</RightLink>

    <LeftLink href="/spezialeinheit-volk">
      Spezialeinheit &#10146; Volk
    </LeftLink>
    <RightLink href="/volk-spezialeinheit">
      Volk &#10146; Spezialeinheit
    </RightLink>

    <LeftLink href="/bonus-volk">Bonus &#10146; Volk</LeftLink>
    <RightLink href="/volk-bonus">Volk &#10146; Bonus</RightLink>

    <LeftLink href="/team-bonus-volk">Team-Bonus &#10146; Volk</LeftLink>
    <RightLink href="/volk-team-bonus">Volk &#10146; Team-Bonus</RightLink>

    <FullWidthLink href="/alle-fragen">Alle Fragen</FullWidthLink>
  </div>
)

const Page: FC = () => {
  return (
    <>
      <Head title="AOE2DE Fragen" />
      <Links />
    </>
  )
}

export default Page
