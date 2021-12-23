import React, { FC } from "react"
import { SpecialUnit } from "src/data/civs"
import { Unit } from "../Unit"

export type NameToSpecialUnitAnswerProps = {
  specialUnit: SpecialUnit
}

export const NameToSpecialUnitAnswer: FC<NameToSpecialUnitAnswerProps> = ({
  specialUnit,
}) => <Unit unit={specialUnit} />
