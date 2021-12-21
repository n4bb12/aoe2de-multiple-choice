import { shuffle } from "lodash"
import React, { ReactNode } from "react"
import { CivIconToNameAnswer } from "src/components/CivIconToNameAnswer"
import { CivIconToNameQuestion } from "src/components/CivIconToNameQuestion"
import { civs } from "src/data/civs"

function randomCivs() {
  return shuffle(civs)
}

export type QueueItemData = {
  question: ReactNode
  correctAnswer: ReactNode
  answers: ReactNode[]
}

export type QueueData = (() => QueueItemData)[]

export function buildQueueData(): QueueData {
  return randomCivs().map((civ) => () => {
    const correctAnswer = <CivIconToNameAnswer civ={civ} />
    const incorrectAnswers = randomCivs()
      .filter((other) => other.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <CivIconToNameAnswer civ={civ} />)

    const data: QueueItemData = {
      question: <CivIconToNameQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }
    return data
  })
}
