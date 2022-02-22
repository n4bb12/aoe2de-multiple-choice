import { FC, useEffect, useState } from "react"
import { backgrounds } from "src/data/backgrounds"
import { getRandomArrayItem } from "src/utils/getRandomArrayItem"

export const Background: FC = ({ children }) => {
  const [background, setBackground] = useState("")

  useEffect(() => {
    const src = getRandomArrayItem(backgrounds)
    const hashedSrc = require("../../assets/backgrounds/" + src).default.src
    setBackground(hashedSrc)
  }, [])

  return (
    <div
      className="bg-gray-400 bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: background ? `url(${background})` : undefined }}
    >
      {children}
    </div>
  )
}
