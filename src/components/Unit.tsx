import { FC } from "react"
import { UnitData } from "src/data/types"
import { Icon } from "./Icon"

export type UnitProps = {
  unit: UnitData
}

export const Unit: FC<UnitProps> = ({ unit }) => (
  <div className="grid items-start content-start justify-center gap-1 text-center justify-items-center">
    <div className="overflow-hidden bg-black rounded-xl">
      <Icon src={unit.icon} alt={unit.name} size="medium" />
    </div>
    <div>{unit.name.replace(/ \(.*/, "")}</div>
  </div>
)
