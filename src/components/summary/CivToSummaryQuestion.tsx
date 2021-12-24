import React, { FC } from "react"
import { CivData } from "src/data/civs"
import { Crest } from "../Crest"
import { Question } from "../Question"

export type CivToSummaryQuestionProps = {
  civ: CivData
}

export const CivToSummaryQuestion: FC<CivToSummaryQuestionProps> = ({
  civ,
}) => {
  return (
    <Question
      text={
        <>
          Was für ein Volk sind die{" "}
          <span className="text-blue-700">{civ.name}</span>?
        </>
      }
      hint={<Crest src={civ.icon} alt={civ.name} size="large" />}
    />
  )
}
