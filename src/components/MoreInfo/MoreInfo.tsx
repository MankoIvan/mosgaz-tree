import React, { useState } from "react";
import { Button, Descriptions, Modal, Tabs, Typography } from "antd";
import { TDataOperation } from "../../types";
import { InfoOutlined } from "@ant-design/icons";
import { getProgress } from "../../utils/getProgress";
import { getTime } from "../../utils/getTime";
import OperationMiniature from "../OperationMiniature/OperationMiniature";
import { groupByAreas } from "../../utils/groupByAreas";
import { CurrentOperationsBlock, DescriptionTableLabel } from "./styles";
import OperationsTable from "../../pages/HorizontalTree/components/OperationsTable/OperationsTable";
import { TMoreInfoProps } from "./types";

const MoreInfo: React.FC<TMoreInfoProps> = ({ data }) => {
  const { name, attributes } = data;
  const statusData = [
    {
      key: "Статус готовности изделия",
      value:
        attributes!.status === 0
          ? "Нет задания"
          : attributes!.status === 1
          ? "В работе"
          : "Готово",
    },
    {
      key: "Текущая ревизия изделия",
      value: attributes!.product_revision,
    },
    {
      key: "Ревизия изделия в работе",
      value: attributes!.task_revision,
    },
    {
      key: "Готовность",
      value: `${getProgress(attributes?.operations as TDataOperation[])}%`,
    },
  ];

  const taskData = [
    {
      key: "Номер задания на выпуск",
      value: attributes?.task_number,
    },
    {
      key: "Автор задания на выпуск",
      value: attributes?.task_author,
    },
    {
      key: "Дата задания на выпуск",
      value: attributes?.task_date,
    },
    {
      key: "Дата окончания задания",
      value: attributes?.task_completion_date,
    },
    {
      key: "Готовность",
      value: `${getProgress(attributes?.operations as TDataOperation[])}%`,
    },
  ];

  const lastOperation = attributes?.operations
    .filter((item) => item.status === 2)
    .slice(-1)[0];
  const currentOperations = attributes?.operations.filter(
    (item) => item.status === 1
  );

  const areaData = [
    {
      key: "Автор задания на выпуск",
      value: attributes?.task_author,
    },
    {
      key: "Дата задания на выпуск",
      value: attributes?.task_date,
    },
    {
      key: "Номер задания на выпуск",
      value: attributes?.task_number,
    },
    {
      key: "Суммарное время на всех участках",
      value: getTime(Number(attributes?.overall_time)) || "0ч",
    },
    {
      key: "Дата окончания задания",
      value: attributes?.task_completion_date,
    },
    {
      key: "Готовность",
      value: `${getProgress(attributes?.operations as TDataOperation[])}%`,
    },
    {
      key: "Предыдущая операция",
      value: lastOperation ? (
        <OperationMiniature
          operationsGroup={[lastOperation]}
          showOperations={false}
          size={32}
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
                  size={32}
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
            <Descriptions.Item
              label={<DescriptionTableLabel>{item.key}</DescriptionTableLabel>}
              key={index}
            >
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
            <Descriptions.Item
              label={<DescriptionTableLabel>{item.key}</DescriptionTableLabel>}
              key={index}
            >
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
            <Descriptions.Item
              label={<DescriptionTableLabel>{item.key}</DescriptionTableLabel>}
              key={index}
            >
              {item.value || "-"}
            </Descriptions.Item>
          ))}
        </Descriptions>
      ),
    },
    {
      label: "Операции",
      key: "4",
      children: (
        <>
          <OperationsTable operations={attributes!.operations} />
          <div>
            <Typography.Text strong>Дата задания на выпуск: </Typography.Text>
            <Typography.Text>{attributes?.task_date || "-"}</Typography.Text>
          </div>
          <div>
            <Typography.Text strong>Дата окончания задания: </Typography.Text>
            <Typography.Text>
              {attributes?.task_completion_date || "-"}
            </Typography.Text>
          </div>
        </>
      ),
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
        title={name}
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
