import { shuffle } from "lodash"
import React from "react"
import { CrestToNameAnswer } from "src/components/crest/CrestToNameAnswer"
import { CrestToNameQuestion } from "src/components/crest/CrestToNameQuestion"
import { NameToCrestAnswer } from "src/components/crest/NameToCrestAnswer"
import { NameToCrestQuestion } from "src/components/crest/NameToCrestQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

function randomCivs() {
  return shuffle(civs)
}

export function buildQueueData(): QueueData {
  const crestToName = randomCivs().map((civ) => () => {
    const correctAnswer = <CrestToNameAnswer civ={civ} />
    const incorrectAnswers = randomCivs()
      .filter((other) => other.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <CrestToNameAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <CrestToNameQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  const nameToCrest = randomCivs().map((civ) => () => {
    const correctAnswer = <NameToCrestAnswer civ={civ} />
    const incorrectAnswers = randomCivs()
      .filter((other) => other.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <NameToCrestAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <NameToCrestQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle([...crestToName, ...nameToCrest])
}
