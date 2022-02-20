import { FC } from "react"
import { Icon, IconProps } from "./Icon"

export type CrestProps = IconProps

export const Crest: FC<CrestProps> = (props) => {
  return <Icon {...props} />
}
