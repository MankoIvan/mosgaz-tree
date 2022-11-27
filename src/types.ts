export type TDataOperation = {
  name: string;
  operation: string;
  area: string;
  area_code: string;
  oper_code: string;
  operation_number: 1;
  block: string;
  resource: string;
  time: string;
  executed_by: string;
  executor_specialization: string;
  status: number;
};

export type TDataAttributes = {
  product_name: string;
  product_number: string;
  status: number;
  quantity: number;
  product_revision: string;
  task_revision: string;
  revision_change: boolean;
  view_2d: string;
  view_3d: string;
  task_number: string;
  task_date: string;
  task_author: string;
  task_executor: string;
  task_completion_date: string;
  overall_time: string;
  operations: TDataOperation[];
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

