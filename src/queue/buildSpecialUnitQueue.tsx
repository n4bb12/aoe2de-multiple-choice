import shuffle from "lodash/shuffle"
import React from "react"
import { Civ } from "src/components/Civ"
import { CivToSpecialUnitAnswer } from "src/components/special-units/CivToSpecialUnitAnswer"
import { CivToSpecialUnitQuestion } from "src/components/special-units/CivToSpecialUnitQuestion"
import { SpecialUnitToCivQuestion } from "src/components/special-units/SpecialUnitToCivQuestion"
import { civs } from "src/data/civs"
import { getRandomArrayItem } from "src/utils/getRandomArrayItem"
import { QueueData, QueueItemData } from "./types"

function randomCivs() {
  return shuffle(civs)
}

export function buildQueueData(): QueueData {
  const bonusToCiv: QueueData = randomCivs()
    .map((civ) => {
      return civ.specialUnits.map((specialUnit) => () => {
        const correctAnswer = <Civ civ={civ} />

        const incorrectAnswers = randomCivs()
          .filter((otherCiv) => otherCiv.name !== civ.name)
          .slice(0, 3)
          .map((civ) => <Civ key={civ.name} civ={civ} />)

        const data: QueueItemData = {
          question: <SpecialUnitToCivQuestion specialUnit={specialUnit} />,
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
          <CivToSpecialUnitAnswer specialUnit={specialUnit} />
        )

        const incorrectAnswers = randomCivs()
          .filter((otherCiv) => otherCiv.name !== civ.name)
          .slice(0, 3)
          .map((otherCiv) => (
            <CivToSpecialUnitAnswer
              key={otherCiv.name}
              specialUnit={getRandomArrayItem(otherCiv.specialUnits)}
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

  return shuffle([...bonusToCiv, ...nameToSpecialUnit])
}
