import { generateBackgrounds } from "./generateBackgrounds"
import { generateCivs } from "./generateCivs"

async function main() {
  await Promise.all([
    //
    generateBackgrounds(),
    generateCivs(),
  ])
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
