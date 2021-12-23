import React, { FC } from "react"
import { Civ } from "src/data/civs"

export type NameToCrestQuestionProps = {
  civ: Civ
}

export const NameToCrestQuestion: FC<NameToCrestQuestionProps> = ({
  civ,
}) => {
  return (
    <div className="grid text-center justify-items-center">
      <div className="text-xl font-bold">
        Welches Wappen haben die{" "}
        <span className="text-blue-700">{civ.name}</span>?
      </div>
    </div>
  )
}
