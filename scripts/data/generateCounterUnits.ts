import { existsSync } from "fs"
import path from "path"
import { CounterUnitData, CounterUnitDataById, UnitData } from "src/data/types"
import unitLines from "../../assets/counter-units/unit-lines.json"
import units from "../../assets/counter-units/units.json"
import { downloadImage } from "./downloadImage"
import { writeJson } from "./fs"

type JsonUnit = typeof units[number]
type JsonUnitLine = typeof unitLines[number]

export async function generateCounterUnits() {
  const regionalUnitIds = [
    // Camel Rider
    3361,
    // Heavy Camel Rider
    3434,
    // Eagle Scout
    3376,
    // Eagle Warrior
    3377,
    // Elite Eagle Warrior
    3390,
    // Battle Elephant
    3355,
    // Elite Battle Elephant
    3381,
    // Steppe Lancer
    3480,
    // Elite Steppe Lancer
    3415,
    // Xolotl Warrior
    // 0,
    // Winged Hussar
    3498,
  ]

  const unitLinesById = unitLines.reduce<Record<number, JsonUnitLine>>(
    (map, item) => {
      map[item.id] = item
      return map
    },
    {},
  )

  function mapUnit(unit: JsonUnitLine["units"][number]): UnitData {
    return {
      name: unit.name,
      icon: "/units/" + unit.icon_url,
    }
  }

  function mapCounterRef(
    counter: JsonUnitLine["unit_counters"][number],
  ): number {
    if (counter.unit_type === "unit") {
      return counter.unit_id
    } else {
      return unitLinesById[counter.unit_id].units[0].id
    }
  }

  function mapCounterUnit(unit: JsonUnit): CounterUnitData {
    const counters = unit.unit_line?.id
      ? unitLinesById[unit.unit_line.id].unit_counters
      : unit.unit_counters

    const details = unit.unit_line?.id
      ? unitLinesById[unit.unit_line.id].units[0]
      : unit

    return {
      id: details.id,
      ...mapUnit(details),
      counters: counters.map(mapCounterRef),
      type: unit.is_unique
        ? "unique"
        : regionalUnitIds.includes(unit.id)
        ? "regional"
        : "core",
    }
  }

  const unitCounters = units.map(mapCounterUnit)

  const unitCountersById = unitCounters.reduce<CounterUnitDataById>(
    (map, item) => ({ ...map, [item.id]: item }),
    {},
  )

  const icons = Object.values(unitCountersById).map(
    (unit) => unit.icon.split("/").pop() as string,
  )

  for (const icon of icons) {
    const file = path.resolve("assets/units/" + icon)
    if (!existsSync(file)) {
      const url = "https://aoecompanion.com/icons/" + icon
      await downloadImage({ url, file })
    }
  }

  await writeJson("src/data/unitCountersById.json", unitCountersById)
}
