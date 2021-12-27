import React, { ButtonHTMLAttributes, FC } from "react"
import { A, AProps } from "./A"

export type ButtonVariantProps = {
  variant?: "primary" | "secondary"
}

export type AsButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button" | undefined
}

export type AsLinkProps = AProps & {
  as: "link"
}

export type ButtonProps = ButtonVariantProps & (AsButtonProps | AsLinkProps)

export const Button: FC<ButtonProps> = ({
  variant = "primary",
  as = "button",
  ...props
}) => {
  let className =
    variant === "primary"
      ? "text-white bg-blue-700 fine:hover:bg-blue-600"
      : "bg-white fine:hover:bg-blue-600 fine:hover:text-white"

  className = `block w-full h-full px-3 sm:px-6 py-3 text-center rounded-xl ${className} ${props.className}`

  if (as === "link") {
    return <A {...(props as AsLinkProps)} className={className} />
  }

  return <button {...(props as AsButtonProps)} className={className} />
}
