import { FC } from "react"
import { CivData } from "src/data/types"
import { Crest } from "../Crest"
import { Question } from "../Question"

export type CivToTeamBonusQuestionProps = {
  civ: CivData
}

export const CivToTeamBonusQuestion: FC<CivToTeamBonusQuestionProps> = ({
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
