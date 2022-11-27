import { QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Typography } from "antd";
import React, { useState } from "react";
import {
  CartIcon,
  BrushIcon,
  BoxIcon,
  CNCIcon,
  EngineIcon,
  SparkIcon,
  WrenchesIcon,
} from "../../../../icons";
import { Container, IconWrapper, Row } from "./styles";

const Legend = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = [
    {
      area: "Участок комплектации",
      icon: <CartIcon />,
    },
    {
      area: "Участок подготовки поверхности",
      icon: <BrushIcon />,
    },
    {
      area: "Заготовительный участок",
      icon: <BoxIcon />,
    },
    {
      area: "Участок ЧПУ",
      icon: <CNCIcon />,
    },
    {
      area: "Механический участок",
      icon: <EngineIcon />,
    },
    {
      area: "Сварочный участок",
      icon: <SparkIcon />,
    },
    {
      area: "Сборочный участок",
      icon: <WrenchesIcon />,
    },
  ];

  return (
    <>
      <Button onClick={showModal}>
        <QuestionCircleOutlined /> Легенда
      </Button>

      <Modal
        title="Легенда"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Container>
          {data.map((item, index) => (
            <Row key={index}>
              <IconWrapper>{item.icon}</IconWrapper>
              <Typography.Text>{item.area}</Typography.Text>
            </Row>
          ))}
        </Container>
      </Modal>
    </>
  );
};

export default Legend;
