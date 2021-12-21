import React, { ButtonHTMLAttributes, FC } from "react"
import { BaseLink, BaseLinkProps } from "./BaseLink"

export type ButtonVariantProps = {
  variant?: "primary" | "secondary"
}

export type AsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | undefined
}

export type AsLinkProps = BaseLinkProps & {
  as: "link"
}

export type ButtonProps = ButtonVariantProps & (AsButtonProps | AsLinkProps)

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  as = "button",
  ...props
}) => {
  const variantClassName =
    variant === "primary"
      ? "text-white bg-blue-700 hover:bg-blue-600"
      : "bg-gray-300  hover:bg-gray-400 hover:text-white"

  const className =
    "block w-full px-4 py-2 text-center rounded-xl " + variantClassName

  if (as === "link") {
    return <BaseLink {...(props as AsLinkProps)} className={className} />
  }

  return <button {...(props as AsButtonProps)} className={className} />
}
