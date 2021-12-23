import { ReactNode } from "react"

export type QueueItemData = {
  question: ReactNode
  correctAnswer: ReactNode
  answers: ReactNode[]
}

export type QueueData = (() => QueueItemData)[]
