import shuffle from "lodash/shuffle"
import React from "react"
import { Civ } from "src/components/Civ"
import { SpecialUnitToCivQuestion } from "src/components/special-units/SpecialUnitToCivQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

export function buildSpecialUnitToCivQueue(): QueueData {
  const specialUnitToCiv: QueueData = shuffle(civs)
    .map((civ) => {
      return civ.specialUnits.map((specialUnit) => () => {
        const correctAnswer = <Civ civ={civ} />

        const incorrectAnswers = shuffle(civs)
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

  return shuffle(specialUnitToCiv)
}
