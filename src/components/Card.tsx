import { FC } from "react"

export const Card: FC = ({ children }) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-lg leading-tight sm:shadow-xl sm:rounded-xl sm:bg-white/75">
      {children}
    </div>
  )
}
