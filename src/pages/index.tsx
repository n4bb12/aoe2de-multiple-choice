import { FC } from "react"
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
    <LeftLink href="/wappen-volk">Wappen ➢ Volk</LeftLink>
    <RightLink href="/volk-wappen">Volk ➢ Wappen</RightLink>

    <LeftLink href="/spezialeinheit-volk">Spezialeinheit ➢ Volk</LeftLink>
    <RightLink href="/volk-spezialeinheit">Volk ➢ Spezialeinheit</RightLink>

    <LeftLink href="/bonus-volk">Bonus ➢ Volk</LeftLink>
    <RightLink href="/volk-bonus">Volk ➢ Bonus</RightLink>

    <LeftLink href="/team-bonus-volk">Team-Bonus ➢ Volk</LeftLink>
    <RightLink href="/volk-team-bonus">Volk ➢ Team-Bonus</RightLink>

    <FullWidthLink href="/kontereinheit-normal">
      Kontereinheiten — Normal
    </FullWidthLink>
    <FullWidthLink href="/kontereinheit-regional">
      Kontereinheiten — Normal, Regional
    </FullWidthLink>
    <FullWidthLink href="/kontereinheit-spezial">
      Kontereinheiten — Normal, Regional, Spezial
    </FullWidthLink>
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
