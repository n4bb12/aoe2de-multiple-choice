import { generateBackgrounds } from "./generateBackgrounds"
import { generateCivs } from "./generateCivs"
import { generateCounterUnits } from "./generateCounterUnits"

async function main() {
  await Promise.all([
    generateBackgrounds(),
    generateCivs(),
    generateCounterUnits(),
  ])
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
