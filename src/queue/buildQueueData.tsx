import { shuffle } from "lodash"
import React, { ReactNode } from "react"
import { CivIconToNameAnswer } from "src/components/CivIconToNameAnswer"
import { CivIconToNameQuestion } from "src/components/CivIconToNameQuestion"
import { CivNameToIconAnswer } from "src/components/CivNameToIconAnswer"
import { CivNameToIconQuestion } from "src/components/CivNameToIconQuestion"
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
  const iconToName = randomCivs().map((civ) => () => {
    const correctAnswer = <CivIconToNameAnswer civ={civ} />
    const incorrectAnswers = randomCivs()
      .filter((other) => other.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <CivIconToNameAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <CivIconToNameQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  const nameToIcon = randomCivs().map((civ) => () => {
    const correctAnswer = <CivNameToIconAnswer civ={civ} />
    const incorrectAnswers = randomCivs()
      .filter((other) => other.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <CivNameToIconAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <CivNameToIconQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle([...iconToName, ...nameToIcon])
}
