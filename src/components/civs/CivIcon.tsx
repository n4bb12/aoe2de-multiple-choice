import { FC } from "react"
import { Civ } from "src/data/civs"

export type CivIconProps = {
  civ: Civ
  size?: "4/4" | "3/4" | "2/4"
}

export const CivIcon: FC<CivIconProps> = ({ civ, size = "4/4" }) => {
  const px =
    size === "3/4" ? (104 * 3) / 4 : size === "2/4" ? (104 * 2) / 4 : 104

  return (
    <img
      src={civ.icon}
      alt={civ.name}
      width={px}
      height={px}
      className={`w-[${px}px] h-[${px}px] flex mx-auto`}
    />
  )
}
