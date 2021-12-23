import { shuffle } from "lodash"
import React from "react"
import { NameToSpecialUnitAnswer } from "src/components/special-units/NameToSpecialUnitAnswer"
import { NameToSpecialUnitQuestion } from "src/components/special-units/NameToSpecialUnitQuestion"
import { SpecialUnitToNameAnswer } from "src/components/special-units/SpecialUnitToNameAnswer"
import { SpecialUnitToNameQuestion } from "src/components/special-units/SpecialUnitToNameQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

function randomCivs() {
  return shuffle(civs)
}

export function buildQueueData(): QueueData {
  const bonusToName = randomCivs().map((civ) => () => {
    const correctAnswer = <SpecialUnitToNameAnswer civ={civ} />
    const incorrectAnswers = randomCivs()
      .filter((other) => other.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <SpecialUnitToNameAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <SpecialUnitToNameQuestion specialUnit={civ.specialUnits[0]} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  const nameToSpecialUnit = randomCivs().map((civ) => () => {
    const correctAnswer = (
      <NameToSpecialUnitAnswer specialUnit={civ.specialUnits[0]} />
    )
    const incorrectAnswers = randomCivs()
      .filter((other) => other.name !== civ.name)
      .slice(0, 3)
      .map((civ) => (
        <NameToSpecialUnitAnswer
          key={civ.name}
          specialUnit={civ.specialUnits[0]}
        />
      ))

    const data: QueueItemData = {
      question: <NameToSpecialUnitQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle([...bonusToName, ...nameToSpecialUnit])
}
