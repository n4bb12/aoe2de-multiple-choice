import { AppProps } from "next/app"
import React, { FC } from "react"
import { Background } from "src/components/Background"
import { Footer } from "src/components/Footer"
import { Head } from "src/components/Head"
import { Header } from "src/components/Header"
import { Main } from "src/components/Main"
import "src/global.css"
import { useWakeLock } from "src/utils/useWakeLock"

const CustomApp: FC<AppProps> = ({ Component, pageProps }) => {
  useWakeLock()

  return (
    <>
      <Head />
      <Background>
        <div className="grid items-start w-screen min-h-screen grid-rows-[auto,1fr,auto] gap-4 sm:gap-8 p-4 sm:p-8 leading-tight">
          <Header />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </div>
      </Background>
    </>
  )
}

export default CustomApp
