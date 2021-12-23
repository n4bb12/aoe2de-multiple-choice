import React, { FC } from "react"
import { useBackground } from "src/state/background"

export const Background: FC = ({ children }) => {
  const background = useBackground()

  return (
    <div
      className="bg-gray-400 bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  )
}
