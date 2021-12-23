import { shuffle } from "lodash"
import React from "react"
import { NameToTeamBonusAnswer } from "src/components/team-bonus/NameToTeamBonusAnswer"
import { NameToTeamBonusQuestion } from "src/components/team-bonus/NameToTeamBonusQuestion"
import { TeamBonusToNameAnswer } from "src/components/team-bonus/TeamBonusToNameAnswer"
import { TeamBonusToNameQuestion } from "src/components/team-bonus/TeamBonusToNameQuestion"
import { civs } from "src/data/civs"
import { QueueData, QueueItemData } from "./types"

function randomCivs() {
  return shuffle(civs)
}

export function buildQueueData(): QueueData {
  const bonusToName: QueueData = randomCivs().map((civ) => () => {
    const correctAnswer = <TeamBonusToNameAnswer civ={civ} />

    const incorrectAnswers = randomCivs()
      .filter((otherCiv) => otherCiv.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <TeamBonusToNameAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <TeamBonusToNameQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  const nameToTeamBonus: QueueData = randomCivs().map((civ) => () => {
    const correctAnswer = <NameToTeamBonusAnswer civ={civ} />

    const incorrectAnswers = randomCivs()
      .filter((otherCiv) => otherCiv.name !== civ.name)
      .slice(0, 3)
      .map((civ) => <NameToTeamBonusAnswer key={civ.name} civ={civ} />)

    const data: QueueItemData = {
      question: <NameToTeamBonusQuestion civ={civ} />,
      correctAnswer,
      answers: shuffle([correctAnswer, ...incorrectAnswers]),
    }

    return data
  })

  return shuffle([...bonusToName, ...nameToTeamBonus])
}
