import React, { FC } from "react"
import { Civ } from "src/data/civs"

export type NameToTeamBonusAnswerProps = {
  civ: Civ
}

export const NameToTeamBonusAnswer: FC<NameToTeamBonusAnswerProps> = ({
  civ,
}) => {
  return <div>{civ.teamBonus}</div>
}
