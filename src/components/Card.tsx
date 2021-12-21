import { FC } from "react"

export const Card: FC = ({ children }) => {
  return (
    <div className="w-full max-w-lg mx-auto text-lg rounded-xl bg-white/75">
      {children}
    </div>
  )
}
