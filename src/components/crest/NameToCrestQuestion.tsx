import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Question } from "../Question"

export type NameToCrestQuestionProps = {
  civ: Civ
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
