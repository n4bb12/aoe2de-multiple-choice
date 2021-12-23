import React, { FC } from "react"
import { Civ } from "src/data/civs"
import { Icon } from "../Icon"

export type NameToCrestAnswerProps = {
  civ: Civ
}

export const NameToCrestAnswer: FC<NameToCrestAnswerProps> = ({ civ }) => {
  return (
    <div className="mx-auto">
      <Icon src={civ.icon} alt={civ.name} size="4/4" />
    </div>
  )
}
