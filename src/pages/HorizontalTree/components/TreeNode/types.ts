import { TData } from "../../../../types"
import { TInfoBlockSize } from "../InfoBlock/types"

export type TTreeNodeProps = {
  data: TData,
  toggleNode: () => void,
  infoBlockSize: TInfoBlockSize,
  isRootNode: boolean
}