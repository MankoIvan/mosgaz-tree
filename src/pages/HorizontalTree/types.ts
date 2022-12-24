import { TDataAttributes } from "../../types";


export type TDataforTree = {
  name: string;
  attributes?: Omit<TDataAttributes, 'operations'>
  children?: TDataforTree[]
}

export type THorizontalTree = {
  treeData: TDataforTree;
  orientation: boolean;
}