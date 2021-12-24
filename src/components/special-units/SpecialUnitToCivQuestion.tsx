import React, { FC } from "react"
import { SpecialUnitData } from "src/data/civs"
import { Question } from "../Question"
import { Unit } from "../Unit"

export type SpecialUnitToCivQuestionProps = {
  specialUnit: SpecialUnitData
}

export const SpecialUnitToCivQuestion: FC<SpecialUnitToCivQuestionProps> = ({
  specialUnit,
}) => {
  return (
    <Question
      text={<>Welche Zivilisation hat diese Spezialeinheit?</>}
      hint={<Unit unit={specialUnit} />}
    />
  )
}
