import shuffle from "lodash/shuffle"
import React from "react"
import { Civ } from "src/components/Civ"
import { TeamBonusToCivQuestion } from "src/components/team-bonus/TeamBonusToCivQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

export function buildTeamBonusToCivQueue(): QueueData {
  const teamBonusToCiv: QueueData = shuffle(civs).map((civ) => () => {
    const correctAnswer = <Civ civ={civ} />

    const incorrectAnswers = shuffle(civs)
      .filter((otherCiv) => otherCiv.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <Civ key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <TeamBonusToCivQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle(teamBonusToCiv)
}
