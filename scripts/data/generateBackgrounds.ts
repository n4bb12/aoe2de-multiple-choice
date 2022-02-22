import { readdir } from "fs/promises"
import { writeJson } from "./fs"

export async function generateBackgrounds() {
  const files = await readdir("assets/backgrounds")

  await writeJson("src/data/backgrounds.json", files)
}
