import { writeFile } from "fs/promises"
import { Civ } from "src/data/civs"
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
  const civs: Civ[] = civConfigs
    .map((config) => {
      const name = strings[config.strings.name]
      const description = strings[config.strings.description]
      const sections = description.split(/\\n\\n/g)

      const civ: Civ = {
        name,
        icon: "/crests/" + config.id + ".png",
        summary: sections[0].trim(),
        bonuses: extractSection(sections[1]),
        specialUnits: extractSection(sections[2]),
        specialTechs: extractSection(sections[3]),
        teamBonus: extractSection(sections[4])[0],
      }
      return civ
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  await writeFile("src/data/civs.json", JSON.stringify(civs, null, 2), "utf8")
}