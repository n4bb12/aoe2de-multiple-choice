import { FC } from "react"

export type IconProps = {
  src: string
  alt: string
  size: "huge" | "large" | "medium" | "small"
}

function mapSize(size: IconProps["size"]) {
  if (size === "huge") return "w-28 h-28 sm:w-40 sm:h-40"
  if (size === "large") return "w-20 h-20 sm:w-28 sm:h-28"
  if (size === "medium") return "w-14 h-14 sm:w-20 sm:h-20"
  if (size === "small") return "w-10 h-10 sm:w-14 sm:h-14"
  throw new Error()
}

export const Icon: FC<IconProps> = ({ src, alt, size = "large" }) => {
  const hashedSrc = require("../../assets" + src).default.src
  const className = mapSize(size)

  return (
    <img src={hashedSrc} alt={alt} className={`flex text-sm leading-tight ${className}`} />
  )
}
