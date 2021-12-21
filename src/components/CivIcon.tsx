import { FC } from "react"
import { Civ } from "src/questions/civs"

export type CivIconProps = {
  civ: Civ
}

export const CivIcon: FC<CivIconProps> = ({ civ }) => {
  const icon = "/civs/" + civ.icon
  return <img src={icon} className="w-[104px] h-[104px]" />
}
