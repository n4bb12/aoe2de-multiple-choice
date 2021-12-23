import React, { FC } from "react"
import { CivData } from "src/data/civs"
import { Civ } from "../Civ"

export type TeamBonusToNameAnswerProps = {
  civ: CivData
}

export const TeamBonusToNameAnswer: FC<TeamBonusToNameAnswerProps> = ({
  civ,
}) => {
  return <Civ civ={civ} />
}
