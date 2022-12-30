import { TData } from "../../../../../../types"

export type TLineDoneProps = {
  data: TData
  showChildren: boolean;
  toggleShowChildren: () => void;
  previewImage?: string
}