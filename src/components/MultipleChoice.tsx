import React, { FC, ReactNode, useState } from "react"
import { PrimaryButton } from "./PrimaryButton"

const CorrectAnswer: FC = ({ children }) => (
  <div className="w-full px-4 py-2 text-center text-white bg-green-700 cursor-default rounded-xl">
    {children}
  </div>
)

const IncorrectAnswer: FC = ({ children }) => (
  <div className="w-full px-4 py-2 text-center text-white bg-red-700 cursor-default rounded-xl">
    {children}
  </div>
)

const NeutralAnswer: FC = ({ children }) => (
  <div className="w-full px-4 py-2 text-center bg-gray-300 cursor-default rounded-xl">
    {children}
  </div>
)

const AnswerButton: FC<{ onClick: () => void }> = ({ children, onClick }) => (
  <button
    className="w-full px-4 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 hover:text-white"
    onClick={onClick}
  >
    {children}
  </button>
)

export type MultipleChoiceProps = {
  question: ReactNode
  answers: ReactNode[]
  correctAnswer: ReactNode
  onContinue: () => void
}

export const MultipleChoice: FC<MultipleChoiceProps> = ({
  question,
  answers,
  correctAnswer,
  onContinue,
}) => {
  const [selected, setSelected] = useState<ReactNode | null>(null)

  return (
    <div className="grid gap-8">
      <div>{question}</div>

      <div className="grid gap-2">
        {answers.map((answer, index) => {
          return (
            <div key={index}>
              {selected && answer === correctAnswer && (
                <CorrectAnswer>{answer}</CorrectAnswer>
              )}
              {selected &&
                selected === answer &&
                selected !== correctAnswer && (
                  <IncorrectAnswer>{answer}</IncorrectAnswer>
                )}
              {selected && answer !== correctAnswer && answer !== selected && (
                <NeutralAnswer>{answer}</NeutralAnswer>
              )}
              {!selected && (
                <AnswerButton onClick={() => setSelected(answer)}>
                  {answer}
                </AnswerButton>
              )}
            </div>
          )
        })}
      </div>

      {selected && (
        <PrimaryButton
          onClick={() => {
            setSelected(null)
            onContinue()
          }}
        >
          Weiter
        </PrimaryButton>
      )}
    </div>
  )
}
