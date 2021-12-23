import React, { FC } from "react"
import { CivData } from "src/data/civs"

export type NameToTeamBonusAnswerProps = {
  civ: CivData
}

export const NameToTeamBonusAnswer: FC<NameToTeamBonusAnswerProps> = ({
  civ,
}) => {
  return <div className="grid items-center h-40">{civ.teamBonus}</div>
}
