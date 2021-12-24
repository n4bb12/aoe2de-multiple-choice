import React, { FC } from "react"
import { CivData } from "src/data/civs"
import { Question } from "../Question"

export type SummaryToCivQuestionProps = {
  civ: CivData
}

export const SummaryToCivQuestion: FC<SummaryToCivQuestionProps> = ({
  civ,
}) => {
  return <Question text="Um welches Volk handelt es sich?" hint={civ.summary} />
}
