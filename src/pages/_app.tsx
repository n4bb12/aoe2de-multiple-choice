import { AppProps } from "next/app"
import React, { FC } from "react"
import { Background } from "src/components/Background"
import { SharedPageProps } from "src/data/shared"
import "src/styles/global.css"

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  const { background } = pageProps as SharedPageProps

  return (
    <Background src={background}>
      <Component {...pageProps} />
    </Background>
  )
}

export default CustomApp
