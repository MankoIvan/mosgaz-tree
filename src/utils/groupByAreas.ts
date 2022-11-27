import { TDataOperation } from "../types";

export const groupByAreas = (operations: TDataOperation[]): TDataOperation[][] => {
  const groupedOperations = [];
  let subOperGroup: TDataOperation[] = [];
  let prevArea = operations[0].area_code;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i].area_code === prevArea) {
      subOperGroup.push(operations[i]);
    } else {
      groupedOperations.push(subOperGroup);
      subOperGroup = [operations[i]];
    }
    prevArea = operations[i].area_code;
  }
  groupedOperations.push(subOperGroup);
  return groupedOperations
}