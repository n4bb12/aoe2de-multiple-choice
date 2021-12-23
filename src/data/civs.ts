import data from "./civs.json"

export type NameAndIconData = {
  name: string
  icon: string
}

export type SpecialUnitData = NameAndIconData

export type SpecialTechData = NameAndIconData

export type CivData = NameAndIconData & {
  summary: string
  bonuses: string[]
  teamBonus: string
  specialUnits: SpecialUnitData[]
  specialTechs: SpecialTechData[]
}

export const civs: CivData[] = data
