import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { CivIcon } from "./CivIcon"

export type CivIconToNameQuestionProps = {
  civ: Civ
}

export const CivIconToNameQuestion: FC<CivIconToNameQuestionProps> = ({
  civ,
}) => {
  return (
    <div className="grid text-center justify-items-center">
      <div className="mb-2 text-xl font-bold">Wie heißt diese Zivilisation?</div>
      <CivIcon civ={civ} />
    </div>
  )
}
