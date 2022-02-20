import { buildCountersQueue } from "./buildCountersQueue"
import { QueueData } from "./types"

export function buildRegionalUnitCountersQueue(): QueueData {
  return buildCountersQueue(["core", "regional"])
}
