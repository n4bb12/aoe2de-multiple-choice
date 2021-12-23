import React, { FC } from "react"
import { CivData } from "src/data/civs"
import { Civ } from "../Civ"

export type TeamBonusToCivAnswerProps = {
  civ: CivData
}

export const TeamBonusToCivAnswer: FC<TeamBonusToCivAnswerProps> = ({
  civ,
}) => {
  return <Civ civ={civ} />
}
