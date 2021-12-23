import React, { FC, ReactNode } from "react"

export type QuestionProps = {
  text: ReactNode
  hint: ReactNode
}

export const Question: FC<QuestionProps> = ({ text, hint }) => {
  return (
    <div className="grid gap-2 font-bold text-center justify-items-center">
      <div className="text-xl leading-tight">{text}</div>
      <div className="max-w-xs text-blue-700">{hint}</div>
    </div>
  )
}
