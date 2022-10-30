import { TData } from "../../../../types"

export type TInfoBlockSize = {
  width: number,
  height: number,
  x: number,
  y: number
}

export type TInfoBlockProps = {
  infoBlockSize: TInfoBlockSize,
  data: TData
}