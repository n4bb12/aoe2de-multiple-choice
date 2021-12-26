import shuffle from "lodash/shuffle"
import React from "react"
import { CrestToNameAnswer } from "src/components/crest/CrestToNameAnswer"
import { CrestToNameQuestion } from "src/components/crest/CrestToNameQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

export function buildCrestToCivQueue(): QueueData {
  const crestToCiv: QueueData = shuffle(civs).map((civ) => () => {
    const correctAnswer = <CrestToNameAnswer civ={civ} />

    const incorrectAnswers = shuffle(civs)
      .filter((otherCiv) => otherCiv.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <CrestToNameAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <CrestToNameQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle(crestToCiv)
}
