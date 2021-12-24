import { readdir, writeFile } from "fs/promises"

export async function generateBackgrounds() {
  const files = await readdir("public/backgrounds")
  const backgrounds = files.map((file) => `/backgrounds/${file}`)

  await writeFile(
    "src/data/backgrounds.json",
    JSON.stringify(backgrounds, null, 2),
    "utf8",
  )
}
