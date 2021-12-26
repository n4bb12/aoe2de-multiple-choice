import shuffle from "lodash/shuffle"
import React from "react"
import { CivToTeamBonusAnswer } from "src/components/team-bonus/CivToTeamBonusAnswer"
import { CivToTeamBonusQuestion } from "src/components/team-bonus/CivToTeamBonusQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

export function buildCivToTeamBonusQueue(): QueueData {
  const civToTeamBonus: QueueData = shuffle(civs).map((civ) => () => {
    const correctAnswer = <CivToTeamBonusAnswer civ={civ} />

    const incorrectAnswers = shuffle(civs)
      .filter((otherCiv) => otherCiv.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <CivToTeamBonusAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <CivToTeamBonusQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle(civToTeamBonus)
}
