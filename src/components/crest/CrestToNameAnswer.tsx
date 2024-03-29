import { FC } from "react"
import { CivData } from "src/data/types"

export type CrestToNameAnswerProps = {
  civ: CivData
}

export const CrestToNameAnswer: FC<CrestToNameAnswerProps> = ({ civ }) => {
  return <div>{civ.name}</div>
}
