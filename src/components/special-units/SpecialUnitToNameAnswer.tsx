import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Icon } from "../Icon"

export type SpecialUnitToNameAnswerProps = {
  civ: Civ
}

export const SpecialUnitToNameAnswer: FC<SpecialUnitToNameAnswerProps> = ({
  civ,
}) => {
  return (
    <div className="grid items-center justify-start grid-flow-col gap-2">
      <Icon src={civ.icon} alt={civ.name} size="2/4" />
      <div>{civ.name}</div>
    </div>
  )
}
