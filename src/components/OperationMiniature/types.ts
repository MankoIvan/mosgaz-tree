import { TDataOperation } from "../../types"

export type TOperationMiniatureProps = {
  operationsGroup: TDataOperation[];
  size?: 16 | 24 | 32;
  showOperations?: boolean;
  showSideText?: boolean;
  showName?: boolean;
}