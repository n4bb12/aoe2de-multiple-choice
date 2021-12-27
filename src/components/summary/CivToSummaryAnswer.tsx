import React, { FC } from "react"

export type CivToSummaryAnswerProps = {
  summary: string
}

export const CivToSummaryAnswer: FC<CivToSummaryAnswerProps> = ({
  summary,
}) => {
  return <div className="grid items-center sm:h-16">{summary}</div>
}