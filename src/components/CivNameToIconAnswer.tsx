import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { CivIcon } from "./CivIcon"

export type CivNameToIconAnswerProps = {
  civ: Civ
}

export const CivNameToIconAnswer: FC<CivNameToIconAnswerProps> = ({ civ }) => {
  return <CivIcon civ={civ} />
}
