import data from "./civs.json"

export type Civ = {
  name: string
  icon: string
  summary: string
  bonuses: string[]
  teamBonus: string
  specialUnits: string[]
  specialTechs: string[]
}

export const civs: Civ[] = data
