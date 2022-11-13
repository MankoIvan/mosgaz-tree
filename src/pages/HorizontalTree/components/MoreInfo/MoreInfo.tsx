import React, { Fragment, useState } from "react";
import { Button, Descriptions, Modal, Tabs } from "antd";
import { TData } from "../../../../types";
import { InfoOutlined } from "@ant-design/icons";
import LifeCycle from "../LifeCycle/LifeCycle";

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
  ];

  const taskData = [
    {
      key: "Номер задания на выпуск",
      value: data.attributes?.task_number,
    },
    {
      key: "Дата задания на выпуск",
      value: data.attributes?.task_date,
    },
    {
      key: "Автор задания на выпуск",
      value: data.attributes?.task_author,
    },
    {
      key: "Исполнитель задания на выпуск",
      value: data.attributes?.task_executor,
    },
    {
      key: "Дата исполнения задания на выпуск",
      value: data.attributes?.task_completion_date,
    },
  ];

  const lastOperation = data.attributes?.operations
    .filter((item) => item.status === 2)
    .slice(-1)[0];

  const areaData = [
    {
      key: "Имя технологической операции по предыдущему участку",
      value: lastOperation?.operation,
    },
    {
      key: "Код технологической операции по предыдущему участку",
      value: lastOperation?.oper_code,
    },
    {
      key: "Название предыдущего участка",
      value: lastOperation?.area,
    },
    {
      key: "Код предыдущего участка",
      value: lastOperation?.area_code,
    },
    {
      key: "Ресурс",
      value: lastOperation?.resource,
    },
    {
      key: "Исполнитель",
      value: lastOperation?.executed_by,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
        width={800}
      >
        <Tabs>
          <Tabs.TabPane tab="Статус" key="1">
            <Descriptions bordered layout="vertical">
              {statusData.map((item, index) => (
                <Descriptions.Item label={item.key} key={index}>
                  {item.value || "-"}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Задание" key="2">
            <Descriptions bordered layout="vertical">
              {taskData.map((item, index) => (
                <Descriptions.Item label={item.key} key={index}>
                  {item.value || "-"}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Участок" key="3">
            <Descriptions bordered layout="vertical">
              {areaData.map((item, index) => (
                <Descriptions.Item label={item.key} key={index}>
                  {item.value || "-"}
                </Descriptions.Item>
              ))}
            </Descriptions>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Операции" key="4">
            <LifeCycle operations={data.attributes!.operations} large/>
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    </>
  );
};

export default MoreInfo;
