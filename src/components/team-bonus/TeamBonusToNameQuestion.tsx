import React, { FC } from "react"
import { Civ } from "src/data/civs"

export type TeamBonusToNameQuestionProps = {
  civ: Civ
}

export const TeamBonusToNameQuestion: FC<TeamBonusToNameQuestionProps> = ({
  civ,
}) => {
  return (
    <div className="grid gap-2 font-bold text-center justify-items-center">
      <div className="text-xl">Welche Zivilisation hat diesen Team-Bonus?</div>
      <div className="max-w-xs text-blue-700">{civ.teamBonus}</div>
    </div>
  )
}
