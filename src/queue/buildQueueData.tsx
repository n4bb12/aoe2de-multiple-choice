import { shuffle } from "lodash"
import React, { ReactNode } from "react"
import { CivIconToNameAnswer } from "src/components/civs/CivIconToNameAnswer"
import { CivIconToNameQuestion } from "src/components/civs/CivIconToNameQuestion"
import { CivNameToIconAnswer } from "src/components/civs/CivNameToIconAnswer"
import { CivNameToIconQuestion } from "src/components/civs/CivNameToIconQuestion"
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

export function buildCivQueue(): QueueData {
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
