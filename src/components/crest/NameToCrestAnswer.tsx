import React, { FC } from "react"
import { CivData } from "src/data/civs"
import { Crest } from "../Crest"

export type NameToCrestAnswerProps = {
  civ: CivData
}

export const NameToCrestAnswer: FC<NameToCrestAnswerProps> = ({ civ }) => {
  return (
    <div className="mx-auto">
      <Crest src={civ.icon} alt={civ.name} size="large" />
    </div>
  )
}
