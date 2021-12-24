import { shuffle } from "lodash"
import React from "react"
import { Civ } from "src/components/Civ"
import { NameToSpecialUnitAnswer } from "src/components/special-units/NameToSpecialUnitAnswer"
import { NameToSpecialUnitQuestion } from "src/components/special-units/NameToSpecialUnitQuestion"
import { SpecialUnitToNameQuestion } from "src/components/special-units/SpecialUnitToNameQuestion"
import { civs } from "src/data/civs"
import { getRandomArrayItem } from "src/utils/getRandomArrayItem"
import { QueueData, QueueItemData } from "./types"

function randomCivs() {
  return shuffle(civs)
}

export function buildQueueData(): QueueData {
  const bonusToName: QueueData = randomCivs()
    .map((civ) => {
      return civ.specialUnits.map((specialUnit) => () => {
        const correctAnswer = <Civ civ={civ} />

        const incorrectAnswers = randomCivs()
          .filter((otherCiv) => otherCiv.name !== civ.name)
          .slice(0, 3)
          .map((civ) => <Civ key={civ.name} civ={civ} />)

        const data: QueueItemData = {
          question: <SpecialUnitToNameQuestion specialUnit={specialUnit} />,
          correctAnswer,
          answers: shuffle([correctAnswer, ...incorrectAnswers]),
        }

        return data
      })
    })
    .flat()

  const nameToSpecialUnit: QueueData = randomCivs()
    .map((civ) => {
      return civ.specialUnits.map((specialUnit) => () => {
        const correctAnswer = (
          <NameToSpecialUnitAnswer specialUnit={specialUnit} />
        )

        const incorrectAnswers = randomCivs()
          .filter((otherCiv) => otherCiv.name !== civ.name)
          .slice(0, 3)
          .map((otherCiv) => (
            <NameToSpecialUnitAnswer
              key={otherCiv.name}
              specialUnit={getRandomArrayItem(otherCiv.specialUnits)}
            />
          ))

        const data: QueueItemData = {
          question: <NameToSpecialUnitQuestion civ={civ} />,
          correctAnswer,
          answers: shuffle([correctAnswer, ...incorrectAnswers]),
        }

        return data
      })
    })
    .flat()

  return shuffle([...bonusToName, ...nameToSpecialUnit])
}
