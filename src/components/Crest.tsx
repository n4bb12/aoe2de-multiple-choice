import React, { FC, useEffect, useState } from "react"
import { Icon, IconProps } from "./Icon"

export type CrestProps = IconProps

export const Crest: FC<CrestProps> = (props) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = props.src
    img.onload = () => setLoaded(true)
  }, [props.src])

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute w-full h-full bg-gray-500 rounded-full" />
      )}
      <Icon {...props} />
    </div>
  )
}
