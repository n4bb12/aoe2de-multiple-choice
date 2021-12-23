import React, { FC } from "react"
import { Civ } from "src/data/civs"

export type TeamBonusToNameQuestionProps = {
  civ: Civ
}

export const TeamBonusToNameQuestion: FC<TeamBonusToNameQuestionProps> = ({
  civ,
}) => {
  return (
    <div className="grid text-center justify-items-center">
      <div className="mb-2 text-xl font-bold">
        Welche Zivilisation hat diesen Team-Bonus?
      </div>
      <div className="font-bold text-blue-700">{civ.teamBonus}</div>
    </div>
  )
}
