import React, { FC } from "react"

export const MainLayout: FC = ({ children }) => {
  return (
    <main className="grid items-start w-screen min-h-screen grid-rows-[10vh,1fr,10vh] text-lg">
      <div className="w-full max-w-sm row-start-2 p-8 mx-auto rounded-xl bg-white/75">
        {children}
      </div>
    </main>
  )
}
