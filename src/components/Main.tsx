import { FC } from "react"
import { Card } from "./Card"

export const Main: FC = ({ children }) => {
  return (
    <main>
      <Card>
        <div className="p-4 sm:p-8">{children}</div>
      </Card>
    </main>
  )
}
