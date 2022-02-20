import shuffle from "lodash/shuffle"
import { BonusToCivQuestion } from "src/components/bonus/BonusToCivQuestion"
import { Civ } from "src/components/Civ"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

export function buildBonusToCivQueue(): QueueData {
  const bonusToCiv: QueueData = shuffle(civs)
    .map((civ) => {
      return civ.bonuses.map((bonus) => () => {
        const correctAnswer = <Civ civ={civ} />

        const incorrectAnswers = shuffle(civs)
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

  return shuffle(bonusToCiv)
}
