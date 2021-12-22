import data from "./backgrounds.json"

export const backgrounds: string[] = data

export function getRandomBackground() {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}
