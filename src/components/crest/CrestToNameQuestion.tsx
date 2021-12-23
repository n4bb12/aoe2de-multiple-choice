import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Icon } from "../Icon"

export type CrestToNameQuestionProps = {
  civ: Civ
}

export const CrestToNameQuestion: FC<CrestToNameQuestionProps> = ({ civ }) => {
  return (
    <div className="grid text-center justify-items-center">
      <div className="mb-2 text-xl font-bold">
        Welche Zivilisation hat dieses Wappen?
      </div>
      <Icon src={civ.icon} alt={civ.name} />
    </div>
  )
}
