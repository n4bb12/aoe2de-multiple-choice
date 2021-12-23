import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Crest } from "../Crest"
import { Question } from "../Question"

export type NameToSpecialUnitQuestionProps = {
  civ: Civ
}

export const NameToSpecialUnitQuestion: FC<NameToSpecialUnitQuestionProps> = ({
  civ,
}) => {
  return (
    <Question
      text={
        <>
          Welchen Spezialeinheit haben die{" "}
          <span className="max-w-xs text-blue-700">{civ.name}</span>?
        </>
      }
      hint={<Crest src={civ.icon} alt={civ.name} size="large" />}
    />
  )
}
