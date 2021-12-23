import React, { FC } from "react"
import { CivData } from "src/data/civs"
import { Civ } from "../Civ"

export type SpecialUnitToNameAnswerProps = {
  civ: CivData
}

export const SpecialUnitToNameAnswer: FC<SpecialUnitToNameAnswerProps> = ({
  civ,
}) => {
  return <Civ civ={civ} />
}
