import React, { FC } from "react"
import { CivData } from "src/data/civs"

export type CivToTeamBonusAnswerProps = {
  civ: CivData
}

export const CivToTeamBonusAnswer: FC<CivToTeamBonusAnswerProps> = ({
  civ,
}) => {
  return <div className="grid items-center h-32">{civ.teamBonus}</div>
}
