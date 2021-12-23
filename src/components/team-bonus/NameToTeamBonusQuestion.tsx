import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Crest } from "../Crest"
import { Question } from "../Question"

export type NameToTeamBonusQuestionProps = {
  civ: Civ
}

export const NameToTeamBonusQuestion: FC<NameToTeamBonusQuestionProps> = ({
  civ,
}) => {
  return (
    <Question
      text={
        <>
          Welchen Team-Bonus haben die{" "}
          <span className="text-blue-700">{civ.name}</span>?
        </>
      }
      hint={<Crest src={civ.icon} alt={civ.name} size="large" />}
    />
  )
}
