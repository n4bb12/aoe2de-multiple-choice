import { FC } from "react"
import { CivData } from "src/data/types"

export type CivToTeamBonusAnswerProps = {
  civ: CivData
}

export const CivToTeamBonusAnswer: FC<CivToTeamBonusAnswerProps> = ({
  civ,
}) => {
  return <div className="grid items-center sm:h-32">{civ.teamBonus}</div>
}
