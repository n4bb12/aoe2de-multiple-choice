import { FC } from "react"

export const Card: FC = ({ children }) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-lg leading-tight shadow-xl rounded-xl bg-white/75">
      {children}
    </div>
  )
}
