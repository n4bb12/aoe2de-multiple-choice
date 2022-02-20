import { buildCountersQueue } from "./buildCountersQueue"
import { QueueData } from "./types"

export function buildCoreUnitCountersQueue(): QueueData {
  return buildCountersQueue(["core"])
}
