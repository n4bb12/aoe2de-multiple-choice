import shuffle from "lodash/shuffle"
import uniq from "lodash/uniq"
import React from "react"
import { CivToSummaryAnswer } from "src/components/summary/CivToSummaryAnswer"
import { CivToSummaryQuestion } from "src/components/summary/CivToSummaryQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

function randomCivs() {
  return shuffle(civs)
}

export function buildQueueData(): QueueData {
  const civToSummary: QueueData = randomCivs().map((civ) => () => {
    const correctAnswer = <CivToSummaryAnswer summary={civ.summary} />

    const incorrectSummaries = uniq(
      randomCivs()
        .map((otherCiv) => otherCiv.summary)
        .filter((summary) => summary !== civ.summary),
    )

    const incorrectAnswers = incorrectSummaries
      .slice(0, 3)
      .map((summary) => <CivToSummaryAnswer key={summary} summary={summary} />)

    const data: QueueItemData = {
      question: <CivToSummaryQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle(civToSummary)
}
