import React, { FC, MouseEventHandler, ReactNode, useState } from "react"
import { Button } from "./Button"

const sharedClassName = "grid w-full h-full px-3 sm:px-6 py-1 sm:py-3 text-center rounded-xl"

const disabledClassName = sharedClassName + " border-transparent cursor-default"

const CorrectAnswer: FC = ({ children }) => (
  <div className={disabledClassName + " text-white bg-green-700"}>
    {children}
  </div>
)

const IncorrectAnswer: FC = ({ children }) => (
  <div className={disabledClassName + " text-white bg-red-700"}>{children}</div>
)

const NeutralAnswer: FC = ({ children }) => (
  <div className={disabledClassName + " text-white bg-gray-400"}>
    {children}
  </div>
)

const AnswerButton: FC<{ onClick: MouseEventHandler }> = ({
  children,
  onClick,
}) => (
  <Button
    className={sharedClassName}
    onClick={onClick}
    variant="secondary"
  >
    {children}
  </Button>
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

  function signalNext() {
    setSelected(null)
    onContinue()
  }

  return (
    <div className="grid gap-4 sm:gap-8">
      <div>{question}</div>

      <div className="grid items-stretch gap-2 sm:grid-cols-2">
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
                <AnswerButton
                  onClick={() => {
                    setSelected(answer)
                    if (answer === correctAnswer) {
                      signalNext()
                    }
                  }}
                >
                  {answer}
                </AnswerButton>
              )}
            </div>
          )
        })}
      </div>

      {selected && selected !== correctAnswer && (
        <Button onClick={signalNext}>Weiter »</Button>
      )}
    </div>
  )
}
