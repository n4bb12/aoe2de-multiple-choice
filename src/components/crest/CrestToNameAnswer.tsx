import { FC } from "react"
import { Civ } from "src/data/civs"

export type CrestToNameAnswerProps = {
  civ: Civ
}

export const CrestToNameAnswer: FC<CrestToNameAnswerProps> = ({ civ }) => {
  return <div>{civ.name}</div>
}
