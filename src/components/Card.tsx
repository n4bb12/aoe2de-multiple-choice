import { FC } from "react"

export const Card: FC = ({ children }) => {
  return (
    <div className="w-full max-w-sm mx-auto text-lg rounded-xl bg-white/75">
      {children}
    </div>
  )
}
