import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Crest } from "../Crest"

export type SpecialUnitToNameAnswerProps = {
  civ: Civ
}

export const SpecialUnitToNameAnswer: FC<SpecialUnitToNameAnswerProps> = ({
  civ,
}) => {
  return (
    <div className="grid items-center justify-start grid-flow-col gap-2">
      <Crest src={civ.icon} alt={civ.name} size="small" />
      <div>{civ.name}</div>
    </div>
  )
}
