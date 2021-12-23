import React, { FC } from "react"
import { SpecialUnit } from "src/data/civs"
import { Question } from "../Question"
import { Unit } from "../Unit"

export type SpecialUnitToNameQuestionProps = {
  specialUnit: SpecialUnit
}

export const SpecialUnitToNameQuestion: FC<SpecialUnitToNameQuestionProps> = ({
  specialUnit,
}) => {
  return (
    <Question
      text={<>Welche Zivilisation hat diese Spezialeinheit?</>}
      hint={<Unit unit={specialUnit} />}
    />
  )
}
