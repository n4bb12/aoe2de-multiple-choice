import { FC } from "react"
import { CivData } from "src/data/types"
import { Question } from "../Question"

export type TeamBonusToCivQuestionProps = {
  civ: CivData
}

export const TeamBonusToCivQuestion: FC<TeamBonusToCivQuestionProps> = ({
  civ,
}) => {
  return (
    <Question
      text="Welche Zivilisation hat diesen Team-Bonus?"
      hint={civ.teamBonus}
    />
  )
}
