import { FC } from "react"
import { Civ } from "src/data/civs"

export type CivIconToNameAnswerProps = {
  civ: Civ
}

export const CivIconToNameAnswer: FC<CivIconToNameAnswerProps> = ({ civ }) => {
  return <>{civ.name}</>
}
