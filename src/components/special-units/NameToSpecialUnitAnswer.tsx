import React, { FC } from "react"
import { SpecialUnitData } from "src/data/civs"
import { Unit } from "../Unit"

export type NameToSpecialUnitAnswerProps = {
  specialUnit: SpecialUnitData
}

export const NameToSpecialUnitAnswer: FC<NameToSpecialUnitAnswerProps> = ({
  specialUnit,
}) => <Unit unit={specialUnit} />
