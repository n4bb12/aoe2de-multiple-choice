import { FC } from "react"
import { Civ } from "src/data/civs"

export type CivIconProps = {
  civ: Civ
}

export const CivIcon: FC<CivIconProps> = ({ civ }) => {
  return (
    <img
      src={civ.icon}
      alt={civ.name}
      className="w-[104px] h-[104px] flex mx-auto"
    />
  )
}
