import shuffle from "lodash/shuffle"
import { buildBonusToCivQueue } from "./buildBonusToCivQueue"
import { buildCivToBonusQueue } from "./buildCivToBonusQueue"
import { buildCivToCrestQueue } from "./buildCivToCrestQueue"
import { buildCivToSpecialUnitQueue } from "./buildCivToSpecialUnitQueue"
import { buildCivToTeamBonusQueue } from "./buildCivToTeamBonusQueue"
import { buildCrestToCivQueue } from "./buildCrestToCivQueue"
import { buildSpecialUnitToCivQueue } from "./buildSpecialUnitToCivQueue"
import { buildTeamBonusToCivQueue } from "./buildTeamBonusToCivQueue"
import { QueueData } from "./types"

export function buildMixedQueue(): QueueData {
  return shuffle([
    ...buildBonusToCivQueue(),
    ...buildCivToBonusQueue(),
    ...buildCivToCrestQueue(),
    ...buildCivToSpecialUnitQueue(),
    ...buildCivToTeamBonusQueue(),
    ...buildCrestToCivQueue(),
    ...buildSpecialUnitToCivQueue(),
    ...buildTeamBonusToCivQueue(),
  ])
}
