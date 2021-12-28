import NextHead from "next/head"
import { FC } from "react"

export type HeadProps = {
  title: string
}

export const Head: FC<HeadProps> = ({ title }) => (
  <NextHead>
    <title>{title}</title>
    <meta name="image" content="/android-chrome-192x192.png" />
    <link rel="canonical" href="https://aoe2de-multiple-choice.vercel.app" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#181c29" />
    <meta name="msapplication-TileColor" content="#ffdf91" />
    <meta name="theme-color" content="#ffdf91"></meta>
  </NextHead>
)
