import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Question } from "../Question"

export type TeamBonusToNameQuestionProps = {
  civ: Civ
}

export const TeamBonusToNameQuestion: FC<TeamBonusToNameQuestionProps> = ({
  civ,
}) => {
  return (
    <Question
      text="Welche Zivilisation hat diesen Team-Bonus?"
      hint={civ.teamBonus}
    />
  )
}
