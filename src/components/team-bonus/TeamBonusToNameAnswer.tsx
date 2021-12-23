import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Crest } from "../Crest"

export type TeamBonusToNameAnswerProps = {
  civ: Civ
}

export const TeamBonusToNameAnswer: FC<TeamBonusToNameAnswerProps> = ({
  civ,
}) => {
  return (
    <div className="grid items-center justify-start grid-flow-col gap-2">
      <Crest src={civ.icon} alt={civ.name} size="3/4" />
      <div>{civ.name}</div>
    </div>
  )
}
