import {
  MinusOutlined,
  PlusOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import { Button, Modal, Typography, Progress } from "antd";
import React, { FC, useState } from "react";
import MoreInfo from "../../../../../../components/MoreInfo/MoreInfo";
import OperationMiniature from "../../../../../../components/OperationMiniature/OperationMiniature";
import { getProgress } from "../../../../../../utils/getProgress";
import { getTime } from "../../../../../../utils/getTime";
import { groupByAreas } from "../../../../../../utils/groupByAreas";
import {
  LineWrapper,
  Border,
  MainBlock,
  PreviewImage,
  ModalImageWrapper,
  ImagePlaceholder,
  TextBlock,
  InfoBlock,
  OperationsBlock,
} from "./LineWIP.styles";
import { TLineWIPProps } from "./LineWIP.types";

const LineWIP: FC<TLineWIPProps> = ({
  data,
  showChildren,
  toggleShowChildren,
  previewImage,
}) => {
  const { name, attributes, children } = data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <LineWrapper>
      {!!children && (
        <Button
          shape="circle"
          icon={showChildren ? <MinusOutlined /> : <PlusOutlined />}
          size="large"
          onClick={toggleShowChildren}
          disabled={!children.length}
          style={{ opacity: !children.length ? 0.5 : 1 }}
        />
      )}

      <Border />

      <MainBlock>
        {previewImage ? (
          <>
            <PreviewImage
              src={`data:image/png;base64,${previewImage}`}
              onClick={showModal}
              alt={""}
            />
            <Modal
              title={name}
              open={isModalOpen}
              onCancel={handleCancel}
              footer={null}
            >
              <ModalImageWrapper>
                <img src={`data:image/png;base64,${previewImage}`} alt={""} />
              </ModalImageWrapper>
            </Modal>
          </>
        ) : (
          <ImagePlaceholder>
            <PictureOutlined />
          </ImagePlaceholder>
        )}
        <TextBlock>
          <Typography.Text>{attributes?.product_number}</Typography.Text>
          <Typography.Text strong>{name}</Typography.Text>
        </TextBlock>
      </MainBlock>

      {attributes && (
        <>
          <Border />

          <InfoBlock>
            <Progress
              type="circle"
              percent={getProgress(attributes.operations)}
              width={40}
            />
            <MoreInfo data={data} />
            <Typography.Title level={4} style={{ margin: 0 }}>
              {attributes.quantity}шт.
            </Typography.Title>
            <Typography.Title level={4} style={{ margin: 0 }}>
              {getTime(Number(attributes.overall_time)) || "0ч"}
            </Typography.Title>
          </InfoBlock>

          <Border />

          <OperationsBlock>
            {groupByAreas(attributes?.operations).map((item, index) => (
              <OperationMiniature
                operationsGroup={item}
                size={24}
                key={index}
              />
            ))}
          </OperationsBlock>
        </>
      )}
    </LineWrapper>
  );
};

export default LineWIP;
