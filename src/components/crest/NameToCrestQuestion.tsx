import { FC } from "react"
import { CivData } from "src/data/types"
import { Question } from "../Question"

export type NameToCrestQuestionProps = {
  civ: CivData
}

export const NameToCrestQuestion: FC<NameToCrestQuestionProps> = ({ civ }) => {
  return (
    <Question
      text={
        <>
          Welches Wappen haben die{" "}
          <span className="text-blue-700">{civ.name}</span>?
        </>
      }
      hint={<></>}
    />
  )
}
