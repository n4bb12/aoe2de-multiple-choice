import { FC } from "react"

export type IconProps = {
  src: string
  alt: string
  size?: "large" | "medium" | "small"
}

function sizeToPx(size: IconProps["size"]) {
  if (size === "large") return 104
  if (size === "medium") return 78
  if (size === "small") return 52
  return 104
}

export const Icon: FC<IconProps> = ({ src, alt, size = "large" }) => {
  const px = sizeToPx(size)

  return (
    <img src={src} alt={alt} width={px} height={px} className="flex text-sm" />
  )
}
