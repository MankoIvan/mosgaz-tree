import React, { Fragment, useState } from "react";
import { Button, Descriptions, Modal, Tabs } from "antd";
import { TData, TDataOperation } from "../../../../types";
import { InfoOutlined } from "@ant-design/icons";
import { getProgress } from "../../../../utils/getProgress";
import { getTime } from "../../../../utils/getTime";
import OperationMiniature from "../OperationMiniature/OperationMiniature";
import { groupByAreas } from "../../../../utils/groupByAreas";
import { CurrentOperationsBlock } from "./styles";
import OperationsTable from "../OperationsTable/OperationsTable";

const MoreInfo: React.FC<TData> = (data) => {
  const statusData = [
    {
      key: "Статус готовности изделия",
      value:
        data.attributes!.status === 0
          ? "Нет задания"
          : data.attributes!.status === 1
          ? "В работе"
          : "Готово",
    },
    {
      key: "Текущая ревизия изделия",
      value: data.attributes!.product_revision,
    },
    {
      key: "Ревизия изделия в работе",
      value: data.attributes!.task_revision,
    },
    {
      key: "Готовность",
      value: `${getProgress(data.attributes?.operations as TDataOperation[])}%`,
    },
  ];

  const taskData = [
    {
      key: "Номер задания на выпуск",
      value: data.attributes?.task_number,
    },
    {
      key: "Автор задания на выпуск",
      value: data.attributes?.task_author,
    },
    {
      key: "Дата задания на выпуск",
      value: data.attributes?.task_date,
    },
    {
      key: "Дата исполнения задания на выпуск",
      value: data.attributes?.task_completion_date,
    },
    {
      key: "Готовность",
      value: `${getProgress(data.attributes?.operations as TDataOperation[])}%`,
    },
  ];

  const lastOperation = data.attributes?.operations
    .filter((item) => item.status === 2)
    .slice(-1)[0];
  const currentOperations = data.attributes?.operations.filter(
    (item) => item.status === 1
  );

  const areaData = [
    {
      key: "Автор задания на выпуск",
      value: data.attributes?.task_author,
    },
    {
      key: "Дата задания на выпуск",
      value: data.attributes?.task_date,
    },
    {
      key: "Номер задания на выпуск",
      value: data.attributes?.task_number,
    },
    {
      key: "Суммарное время на всех участках",
      value: getTime(Number(data.attributes?.overall_time)) || "0ч",
    },
    {
      key: "Дата исполнения задания на выпуск",
      value: data.attributes?.task_completion_date,
    },
    {
      key: "Готовность",
      value: `${getProgress(data.attributes?.operations as TDataOperation[])}%`,
    },
    {
      key: "Предыдущая операция",
      value: lastOperation ? (
        <OperationMiniature
          operationsGroup={[lastOperation]}
          showOperations={false}
          large
          showSideText
        />
      ) : (
        "-"
      ),
    },
    {
      key: "Текущие операции в работе",
      value: (
        <CurrentOperationsBlock>
          {currentOperations?.length
            ? groupByAreas(currentOperations).map((item, index) => (
                <OperationMiniature
                  operationsGroup={item}
                  showOperations={false}
                  large
                  showSideText
                  key={index}
                />
              ))
            : "-"}
        </CurrentOperationsBlock>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const items = [
    {
      label: "Статус",
      key: "1",
      children: (
        <Descriptions bordered layout="vertical">
          {statusData.map((item, index) => (
            <Descriptions.Item label={item.key} key={index}>
              {item.value || "-"}
            </Descriptions.Item>
          ))}
        </Descriptions>
      ),
    },
    {
      label: "Задание",
      key: "2",
      children: (
        <Descriptions bordered layout="vertical">
          {taskData.map((item, index) => (
            <Descriptions.Item label={item.key} key={index}>
              {item.value || "-"}
            </Descriptions.Item>
          ))}
        </Descriptions>
      ),
    },
    {
      label: "Участок",
      key: "3",
      children: (
        <Descriptions bordered layout="vertical">
          {areaData.map((item, index) => (
            <Descriptions.Item label={item.key} key={index}>
              {item.value || "-"}
            </Descriptions.Item>
          ))}
        </Descriptions>
      ),
    },
    {
      label: "Операции",
      key: "4",
      children: <OperationsTable operations={data.attributes!.operations} />,
    },
  ];

  return (
    <>
      <Button
        shape="circle"
        icon={<InfoOutlined />}
        size="large"
        onClick={showModal}
      />
      <Modal
        title={data.name}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={"100%"}
      >
        <Tabs items={items} />
      </Modal>
    </>
  );
};

export default MoreInfo;
