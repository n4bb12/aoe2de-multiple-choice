import { FC } from "react"

export type IconProps = {
  src: string
  alt: string
  size?: "4/4" | "3/4" | "2/4"
}

export const Icon: FC<IconProps> = ({ src, alt, size = "4/4" }) => {
  const px =
    size === "3/4" ? (104 * 3) / 4 : size === "2/4" ? (104 * 2) / 4 : 104

  return (
    <img src={src} alt={alt} width={px} height={px} className="flex mx-auto" />
  )
}
