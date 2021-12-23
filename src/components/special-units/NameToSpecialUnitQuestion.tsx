import React, { FC } from "react"
import { Civ } from "src/data/civs"

export type NameToSpecialUnitQuestionProps = {
  civ: Civ
}

export const NameToSpecialUnitQuestion: FC<NameToSpecialUnitQuestionProps> = ({
  civ,
}) => {
  return (
    <div className="grid text-center justify-items-center">
      <div className="text-xl font-bold">
        Welchen Spezialeinheit haben die{" "}
        <span className="text-blue-700">{civ.name}</span>?
      </div>
    </div>
  )
}
