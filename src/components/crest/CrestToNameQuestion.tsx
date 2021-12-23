import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Icon } from "../Icon"

export type CrestToNameQuestionProps = {
  civ: Civ
}

export const CrestToNameQuestion: FC<CrestToNameQuestionProps> = ({ civ }) => {
  return (
    <div className="grid gap-2 text-center justify-items-center">
      <div className="text-xl font-bold">
        Welche Zivilisation hat dieses Wappen?
      </div>
      <Icon src={civ.icon} alt={civ.name} size="4/4" />
    </div>
  )
}
