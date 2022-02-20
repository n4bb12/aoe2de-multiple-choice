import { FC } from "react"
import { UnitData } from "src/data/types"
import { Question } from "../Question"
import { Unit } from "../Unit"

export type CounterUnitQuestionProps = {
  unit: UnitData
}

export const CounterUnitQuestion: FC<CounterUnitQuestionProps> = ({ unit }) => {
  return (
    <Question
      text={<>Womit konterst du diese Einheit?</>}
      hint={<Unit unit={unit} />}
    />
  )
}
