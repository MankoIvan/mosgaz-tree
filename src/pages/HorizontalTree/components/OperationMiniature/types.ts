import { TDataOperation } from "../../../../types"

export type TOperationMiniatureProps = {
  operationsGroup: TDataOperation[];
  large?: boolean;
  showOperations?: boolean;
  showSideText?: boolean;
  showName?: boolean;
}