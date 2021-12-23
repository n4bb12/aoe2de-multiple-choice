import React, { FC } from "react"
import { Civ } from "src/data/civs"

export type NameToTeamBonusQuestionProps = {
  civ: Civ
}

export const NameToTeamBonusQuestion: FC<NameToTeamBonusQuestionProps> = ({
  civ,
}) => {
  return (
    <div className="grid text-center justify-items-center">
      <div className="text-xl font-bold">
        Welchen Team-Bonus haben die{" "}
        <span className="text-blue-700">{civ.name}</span>?
      </div>
    </div>
  )
}
