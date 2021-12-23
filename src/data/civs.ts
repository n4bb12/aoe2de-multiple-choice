import data from "./civs.json"

export type NameAndIcon = {
  name: string
  icon: string
}

export type SpecialUnit = NameAndIcon

export type SpecialTech = NameAndIcon

export type Civ = NameAndIcon & {
  summary: string
  bonuses: string[]
  teamBonus: string
  specialUnits: SpecialUnit[]
  specialTechs: SpecialTech[]
}

export const civs: Civ[] = data
