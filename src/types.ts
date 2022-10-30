type TDataOperations = {
  operation: string;
  area: string;
  area_code: string;
  oper_code: string;
  done: boolean;
};

type TDataAttributes = {
  product_name: string;
  product_number: string;
  status: number;
  quantity: number;
  product_revision: string;
  task_revision: string;
  revision_change: boolean;
  overall_time: number;
  operations: TDataOperations[];
};

export type TData = {
  name: string;
  attributes?: TDataAttributes;
  children?: TData[]
}

export type TDataforTree = {
  name: string;
  attributes?: Omit<TDataAttributes, 'operations'>
  children?: TDataforTree[]
}

