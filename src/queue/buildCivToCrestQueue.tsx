import shuffle from "lodash/shuffle"
import React from "react"
import { NameToCrestAnswer } from "src/components/crest/NameToCrestAnswer"
import { NameToCrestQuestion } from "src/components/crest/NameToCrestQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

export function buildQueueData(): QueueData {
  const civToCrest: QueueData = shuffle(civs).map((civ) => () => {
    const correctAnswer = <NameToCrestAnswer civ={civ} />

    const incorrectAnswers = shuffle(civs)
      .filter((otherCiv) => otherCiv.name !== civ.name)
      .slice(0, 3)
      .map((otherCiv) => (
        <NameToCrestAnswer key={otherCiv.name} civ={otherCiv} />
      ))

    const data: QueueItemData = {
      question: <NameToCrestQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle(civToCrest)
}
