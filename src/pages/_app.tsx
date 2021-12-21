import { AppProps } from "next/app"
import React, { FC } from "react"
import { Background } from "src/components/Background"
import { SharedPageProps } from "src/data/shared"
import { initializeBackground } from "src/state/background"
import "src/styles/global.css"
import { useBeforeFirstRenderEffect } from "src/utils/useBeforeFirstRenderEffect"

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { background } = pageProps as SharedPageProps

  useBeforeFirstRenderEffect(() => {
    initializeBackground(background)
  })

  return (
    <Background>
      <Component {...pageProps} />
    </Background>
  )
}

export default CustomApp
