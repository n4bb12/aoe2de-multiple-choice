import { writeFile } from "fs/promises"
import { CivData } from "src/data/civs"
import { civConfigs } from "./civConfigs"
import { readStrings } from "./readStrings"

function extractSection(section: string) {
  return section
    .split(/\\n/g)
    .slice(1)
    .map((line) => line.replace("•", "").trim())
}

export async function generateCivs() {
  const strings = await readStrings()
  const civs: CivData[] = civConfigs
    .map((config) => {
      const name = strings[config.strings.name]
      const description = strings[config.strings.description]
      const sections = description.split(/\\n\\n/g)

      const civ: CivData = {
        name,
        icon: "/crests/" + config.icons.crest,
        summary: sections[0].trim(),
        bonuses: extractSection(sections[1]),
        specialUnits: extractSection(sections[2])[0]
          .split(", ")
          .map((name, index) => ({
            name,
            icon: "/units/" + config.icons.specialUnits[index] || "",
          })),
        specialTechs: extractSection(sections[3]).map((name, index) => ({
          name,
          icon: "/units/" + config.icons.specialTechs[index] || "",
        })),
        teamBonus: extractSection(sections[4])[0],
      }
      return civ
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  await writeFile("src/data/civs.json", JSON.stringify(civs, null, 2), "utf8")
}
