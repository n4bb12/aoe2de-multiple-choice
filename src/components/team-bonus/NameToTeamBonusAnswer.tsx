import React, { FC } from "react"
import { Civ } from "src/data/civs"

export type NameToTeamBonusAnswerProps = {
  civ: Civ
}

export const NameToTeamBonusAnswer: FC<NameToTeamBonusAnswerProps> = ({
  civ,
}) => {
  return <div className="grid items-center h-40">{civ.teamBonus}</div>
}
