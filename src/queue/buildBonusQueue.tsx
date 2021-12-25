import shuffle from "lodash/shuffle"
import React from "react"
import { BonusToCivQuestion } from "src/components/bonus/BonusToCivQuestion"
import { CivToBonusAnswer } from "src/components/bonus/CivToBonusAnswer"
import { CivToBonusQuestion } from "src/components/bonus/CivToBonusQuestion"
import { Civ } from "src/components/Civ"
import { randomCivs } from "src/data/civs"
import { getRandomArrayItem } from "src/utils/getRandomArrayItem"
import { QueueData, QueueItemData } from "./types"

export function buildQueueData(): QueueData {
  const bonusToCiv: QueueData = randomCivs()
    .map((civ) => {
      return civ.bonuses.map((bonus) => () => {
        const correctAnswer = <Civ civ={civ} />

        const incorrectAnswers = randomCivs()
          .filter((otherCiv) => otherCiv.name !== civ.name)
          .slice(0, 3)
          .map((civ) => <Civ key={civ.name} civ={civ} />)

        const data: QueueItemData = {
          question: <BonusToCivQuestion bonus={bonus} />,
          correctAnswer,
          answers: shuffle([correctAnswer, ...incorrectAnswers]),
        }

        return data
      })
    })
    .flat()

  const civToBonus: QueueData = randomCivs()
    .map((civ) => {
      return civ.bonuses.map((bonus) => () => {
        const correctAnswer = <CivToBonusAnswer bonus={bonus} />

        const incorrectAnswers = randomCivs()
          .filter((otherCiv) => otherCiv.name !== civ.name)
          .slice(0, 3)
          .map((otherCiv) => (
            <CivToBonusAnswer
              key={otherCiv.name}
              bonus={getRandomArrayItem(otherCiv.bonuses)}
            />
          ))

        const data: QueueItemData = {
          question: <CivToBonusQuestion civ={civ} />,
          correctAnswer,
          answers: shuffle([correctAnswer, ...incorrectAnswers]),
        }

        return data
      })
    })
    .flat()

  return shuffle([...bonusToCiv, ...civToBonus])
}
