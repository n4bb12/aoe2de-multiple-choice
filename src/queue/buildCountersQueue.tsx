import shuffle from "lodash/shuffle"
import { CounterUnitQuestion } from "src/components/counter-units/CounterUnitQuestion"
import { Unit } from "src/components/Unit"
import { CounterUnitData } from "src/data/types"
import { unitCountersById } from "src/data/unitCountersById"
import { QueueData, QueueItemData } from "./types"

export function buildCountersQueue(
  types: CounterUnitData["type"][],
): QueueData {
  const units = Object.values(unitCountersById)
    .filter((unit) => types.includes(unit.type))
    .map((unit) => ({
      ...unit,
      counters: unit.counters.filter((id) =>
        types.includes(unitCountersById[id].type),
      ),
    }))
    .filter((unit) => unit.counters.length)

  const coreUnitToCounterUnit: QueueData = shuffle(units).map(
    (questionUnit) => () => {
      const counters = questionUnit.counters.map((id) => unitCountersById[id])
      const randomCounter = shuffle(counters)[0]
      const correctAnswer = <Unit unit={randomCounter} />

      const nonCounters = units.filter(
        (unit) =>
          !questionUnit.counters.includes(unit.id) &&
          unit.id !== questionUnit.id,
      )
      const incorrectAnswers = shuffle(nonCounters)
        .slice(0, 3)
        .map((unit) => <Unit unit={unit} />)

      const data: QueueItemData = {
        question: <CounterUnitQuestion unit={questionUnit} />,
        correctAnswer,
        answers: shuffle([correctAnswer, ...incorrectAnswers]),
      }

      return data
    },
  )

  return shuffle(coreUnitToCounterUnit)
}
