import React, { ButtonHTMLAttributes, FC } from "react"
import { BaseLink, BaseLinkProps } from "./BaseLink"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | undefined
}

export type LinkProps = BaseLinkProps & {
  as: "link"
}

export type PrimaryButtonProps = ButtonProps | LinkProps

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  as = "button",
  ...props
}) => {
  const className =
    "w-full px-4 py-2 text-white bg-blue-700 rounded-xl hover:bg-blue-600"

  if (as === "link") {
    return <BaseLink {...(props as LinkProps)} className={className} />
  }

  return <button {...(props as ButtonProps)} className={className} />
}
