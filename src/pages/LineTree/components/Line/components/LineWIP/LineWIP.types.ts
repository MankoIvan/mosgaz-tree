import { TData } from "../../../../../../types"

export type TLineWIPProps = {
  data: TData
  showChildren: boolean;
  toggleShowChildren: () => void;
  previewImage?: string
}