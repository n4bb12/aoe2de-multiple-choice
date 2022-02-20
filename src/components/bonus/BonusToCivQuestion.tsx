import { FC } from "react"
import { Question } from "../Question"

export type BonusToCivQuestionProps = {
  bonus: string
}

export const BonusToCivQuestion: FC<BonusToCivQuestionProps> = ({ bonus }) => {
  return <Question text="Welche Zivilisation hat diesen Bonus?" hint={bonus} />
}
