import { FC } from "react"
import { CivData } from "src/data/types"
import { Crest } from "./Crest"

export type CivProps = {
  civ: CivData
}

export const Civ: FC<CivProps> = ({ civ }) => {
  return (
    <div className="grid items-center justify-start grid-flow-col gap-2">
      <Crest src={civ.icon} alt={civ.name} size="medium" />
      <div>{civ.name}</div>
    </div>
  )
}
