import { AppProps } from "next/app"
import React, { FC } from "react"
import "src/styles/global.css"

const CustomApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props as AppProps
  return <Component {...pageProps} />
}

export default CustomApp
