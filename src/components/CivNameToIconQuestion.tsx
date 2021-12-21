import React, { FC } from "react"
import { Civ } from "src/data/civs"

export type CivNameToIconQuestionProps = {
  civ: Civ
}

export const CivNameToIconQuestion: FC<CivNameToIconQuestionProps> = ({
  civ,
}) => {
  return (
    <div className="grid text-center justify-items-center">
      <div className="text-xl font-bold">
        Welches Banner haben die <span className="text-blue-700">{civ.name}</span>?
      </div>
    </div>
  )
}
