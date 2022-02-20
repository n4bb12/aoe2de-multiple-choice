import { CivData } from "src/data/types"
import { civConfigs } from "./civConfigs"
import { writeJson } from "./fs"
import { readGameStrings } from "./readGameStrings"

function normalize(line: string) {
  const normalized = line
    .replace(/\\n$/g, "")
    .replace(/ \\n/g, "; ")
    .replace(/\\n/g, "")
    .replace(/,;/g, ",")
    .replace(/\s+/g, " ")
    .replace(/ %/g, "%")
    .replace(/\+ (\d)/g, "+$1")
    .replace(/\- (\d)/g, "-$1")
    .replace(/x mehr/g, "x")
    .replace(/um (\d+)%/g, "$1%")
    .trim()
  return normalized
}

export async function generateCivs() {
  const gameStrings = await readGameStrings()
  const civs: CivData[] = civConfigs
    .map((config) => {
      const name = gameStrings[config.strings.name]
      const description = gameStrings[config.strings.description]
      const sections = description.split(/\\n\\n/g)

      const civ: CivData = {
        name,
        icon: "/crests/" + config.icons.crest,
        bonuses: sections[1].split(/•/g).slice(1).map(normalize),
        specialUnits: sections[2]
          .split(/\\n/g)
          .slice(1)
          .map(normalize)[0]
          .split(", ")
          .map((name, index) => ({
            name,
            icon: "/units/" + config.icons.specialUnits[index] || "",
          })),
        specialTechs: sections[3]
          .split(/•/g)
          .slice(1)
          .map(normalize)
          .map((name, index) => ({
            name,
            icon: "/techs/" + config.icons.specialTechs[index] || "",
          })),
        teamBonus: sections[4].split(/\\n/g).slice(1).map(normalize)[0],
      }
      return civ
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  await writeJson("src/data/civs.json", civs)
}
