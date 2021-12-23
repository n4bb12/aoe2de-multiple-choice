import { AppProps } from "next/app"
import React, { FC } from "react"
import { Background } from "src/components/Background"
import { Footer } from "src/components/Footer"
import { Header } from "src/components/Header"
import { Main } from "src/components/Main"
import { SharedPageProps } from "src/data/shared"
import "src/global.css"
import { initializeBackground } from "src/state/background"
import { useBeforeFirstRenderEffect } from "src/utils/useBeforeFirstRenderEffect"

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { background } = pageProps as SharedPageProps

  useBeforeFirstRenderEffect(() => {
    initializeBackground(background)
  })

  return (
    <Background>
      <div className="grid items-start w-screen min-h-screen grid-rows-[auto,1fr,auto] gap-8 p-8 leading-tight">
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </div>
    </Background>
  )
}

export default CustomApp
