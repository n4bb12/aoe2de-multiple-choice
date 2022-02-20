import { readdir } from "fs/promises"
import { writeJson } from "./fs"

export async function generateBackgrounds() {
  const files = await readdir("assets/backgrounds")
  const backgrounds = files.map((file) => `/backgrounds/${file}`)

  await writeJson("src/data/backgrounds.json", backgrounds)
}
