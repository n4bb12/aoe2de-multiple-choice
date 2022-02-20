export type NameAndIconData = {
  name: string
  icon: string
}

export type UnitData = NameAndIconData
export type TechData = NameAndIconData

export type CivData = NameAndIconData & {
  bonuses: string[]
  teamBonus: string
  specialUnits: UnitData[]
  specialTechs: TechData[]
}

export type CounterUnitData = UnitData & {
  id: number
  counters: number[]
  type: "core" | "regional" | "unique"
}

export type CounterUnitDataById = Record<number, CounterUnitData>
