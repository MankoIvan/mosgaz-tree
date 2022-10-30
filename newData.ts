const enum EStatus {
  NO_TASKS = 0, // red
  WIP = 1, // yellow
  READY = 2 // green
  // grey
}

type TAreaName = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g'

type TArea = {
  status: EStatus,
  time: number
}

type TOperation = {
  name: string, // имя операции
  oper_code: string, // номер операции
  area: string // участок
  area_code: string, // номер участка
  status: number, // статус операции
  time: number, // потраченное время
  operation_number: string, // номер операции
  resource: string, // ресурс
  executed_by: string, // исполнитель
  executor_specialization: string // специализация исполнителя
}

export type TNewData = {
  name: string, // имя узла
  attributes: {
    product_name: string, // имя изделия
    product_number: string, // дпма/номер изделия
    status: number, // статус изделия 
    view_2d: string, // ссылка на 2д вид
    view_3d: string, // ссылка на 3д вид
    quantity: number, // количество
    overall_time: number, // общее потраченное время
    product_revision: string // текущая ревизия изделия
    task_revision: string, // ревизия изделия в работе
    task_number: string, // номер задания на выпуск
    task_date: string, // дата задания на выпуск
    task_author: string, // автор задания на выпуск
    task_executor: string, // исполнитель задания на выпуск
    task_completion_date: string, // дата исполнения задания на выпуск
    operations: TOperation[] // массив операций в хронологической последовательности, тип опреации указаны выше
  }
  children: TNewData[] // массив дочерних изделий
}