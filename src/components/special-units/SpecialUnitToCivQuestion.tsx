import { FC } from "react"
import { UnitData } from "src/data/types"
import { Question } from "../Question"
import { Unit } from "../Unit"

export type SpecialUnitToCivQuestionProps = {
  specialUnit: UnitData
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
