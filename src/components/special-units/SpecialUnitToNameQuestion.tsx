import React, { FC } from "react"
import { SpecialUnit } from "src/data/civs"
import { Unit } from "../Unit"

export type SpecialUnitToNameQuestionProps = {
  specialUnit: SpecialUnit
}

export const SpecialUnitToNameQuestion: FC<SpecialUnitToNameQuestionProps> = ({
  specialUnit,
}) => {
  return (
    <div className="grid gap-2 font-bold text-center justify-items-center">
      <div className="text-xl">
        Welche Zivilisation hat diese Spezialeinheit?
      </div>
      <div className="max-w-xs text-blue-700">
        <Unit unit={specialUnit} />
      </div>
    </div>
  )
}
