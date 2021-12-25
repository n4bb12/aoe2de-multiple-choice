import React, { FC } from "react"
import { SpecialUnitData } from "src/data/civs"
import { Unit } from "../Unit"

export type CivToSpecialUnitAnswerProps = {
  specialUnit: SpecialUnitData
}

export const CivToSpecialUnitAnswer: FC<CivToSpecialUnitAnswerProps> = ({
  specialUnit,
}) => <Unit unit={specialUnit} />
