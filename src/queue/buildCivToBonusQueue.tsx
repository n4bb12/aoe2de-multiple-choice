import shuffle from "lodash/shuffle"
import React from "react"
import { CivToBonusAnswer } from "src/components/bonus/CivToBonusAnswer"
import { CivToBonusQuestion } from "src/components/bonus/CivToBonusQuestion"
import { civs } from "src/data/civs"
import { getRandomArrayItem } from "src/utils/getRandomArrayItem"
import { QueueData, QueueItemData } from "./types"

export function buildCivToBonusQueue(): QueueData {
  const civToBonus: QueueData = shuffle(civs)
    .map((civ) => {
      return civ.bonuses.map((bonus) => () => {
        const correctAnswer = <CivToBonusAnswer bonus={bonus} />

        const incorrectAnswers = shuffle(civs)
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

  return shuffle(civToBonus)
}
