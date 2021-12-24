import { shuffle } from "lodash"
import React from "react"
import { Civ } from "src/components/Civ"
import { CivToTeamBonusAnswer } from "src/components/team-bonus/CivToTeamBonusAnswer"
import { CivToTeamBonusQuestion } from "src/components/team-bonus/CivToTeamBonusQuestion"
import { TeamBonusToCivQuestion } from "src/components/team-bonus/TeamBonusToCivQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

function randomCivs() {
  return shuffle(civs)
}

export function buildQueueData(): QueueData {
  const bonusToName: QueueData = randomCivs().map((civ) => () => {
    const correctAnswer = <Civ civ={civ} />

    const incorrectAnswers = randomCivs()
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

  const civToTeamBonus: QueueData = randomCivs().map((civ) => () => {
    const correctAnswer = <CivToTeamBonusAnswer civ={civ} />

    const incorrectAnswers = randomCivs()
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

  return shuffle([...bonusToName, ...civToTeamBonus])
}
