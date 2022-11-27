import { TDataOperation } from "../types";

export const getProgress = (operations: TDataOperation[]): number => {
  const progress: number = Math.floor(
    (100 *
      operations.filter(
        (item: TDataOperation) => item.status === 2
      ).length) /
    operations.length
  );
  return progress
}