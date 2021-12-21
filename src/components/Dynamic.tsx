import { AllHTMLAttributes, createElement, forwardRef, ReactNode } from "react"

export type DynamicProps = {
  tagName: string
  children?: ReactNode | undefined
} & AllHTMLAttributes<HTMLElement>

export const Dynamic = forwardRef<any, DynamicProps>(
  ({ tagName, ...props }, ref) => createElement(tagName, { ...props, ref }),
)

Dynamic.displayName = "Dynamic"
