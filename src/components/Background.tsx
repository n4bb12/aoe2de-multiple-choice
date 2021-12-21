import React, { FC } from "react"

export type BackgroundProps = {
  src: string
}

export const Background: FC<BackgroundProps> = ({ src, children }) => {
  return (
    <div
      className="bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${src})` }}
    >
      {children}
    </div>
  )
}
