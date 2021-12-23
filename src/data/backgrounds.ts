import { getRandomArrayItem } from "src/utils/getRandomArrayItem"
import data from "./backgrounds.json"

export const backgrounds: string[] = data

export function getRandomBackground() {
  return getRandomArrayItem(backgrounds)
}
