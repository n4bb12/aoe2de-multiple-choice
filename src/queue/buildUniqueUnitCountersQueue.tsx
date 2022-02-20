import { buildCountersQueue } from "./buildCountersQueue"
import { QueueData } from "./types"

export function buildUniqueUnitCountersQueue(): QueueData {
  return buildCountersQueue(["core", "regional", "unique"])
}
