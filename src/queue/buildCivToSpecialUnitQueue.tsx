import shuffle from "lodash/shuffle"
import React from "react"
import { CivToSpecialUnitQuestion } from "src/components/special-units/CivToSpecialUnitQuestion"
import { Unit } from "src/components/Unit"
import { civs } from "src/data/civs"
import { getRandomArrayItem } from "src/utils/getRandomArrayItem"
import { QueueData, QueueItemData } from "./types"

export function buildCivToSpecialUnitQueue(): QueueData {
  const civToSpecialUnit: QueueData = shuffle(civs)
    .map((civ) => {
      return civ.specialUnits.map((specialUnit) => () => {
        const correctAnswer = <Unit unit={specialUnit} />

        const incorrectAnswers = shuffle(civs)
          .filter((otherCiv) => otherCiv.name !== civ.name)
          .slice(0, 3)
          .map((otherCiv) => (
            <Unit
              key={otherCiv.name}
              unit={getRandomArrayItem(otherCiv.specialUnits)}
            />
          ))

        const data: QueueItemData = {
          question: <CivToSpecialUnitQuestion civ={civ} />,
          correctAnswer,
          answers: shuffle([correctAnswer, ...incorrectAnswers]),
        }

        return data
      })
    })
    .flat()

  return shuffle(civToSpecialUnit)
}
