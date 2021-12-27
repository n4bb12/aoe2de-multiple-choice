import React, { FC } from "react"

export type CivToBonusAnswerProps = {
  bonus: string
}

export const CivToBonusAnswer: FC<CivToBonusAnswerProps> = ({ bonus }) => {
  return <div className="grid items-center sm:h-32">{bonus}</div>
}
