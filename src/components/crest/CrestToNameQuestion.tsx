import React, { FC } from "react"
import { CivData } from "src/data/civs"
import { Crest } from "../Crest"
import { Question } from "../Question"

export type CrestToNameQuestionProps = {
  civ: CivData
}

export const CrestToNameQuestion: FC<CrestToNameQuestionProps> = ({ civ }) => {
  return (
    <Question
      text={<>Welche Zivilisation hat dieses Wappen?</>}
      hint={<Crest src={civ.icon} alt={civ.name} size="large" />}
    />
  )
}
