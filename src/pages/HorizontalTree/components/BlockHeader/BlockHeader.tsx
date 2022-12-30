import { PictureOutlined } from "@ant-design/icons";
import { Button, Modal, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { CTABlock, ImagePlaceholder, ModalImageWrapper, PreviewImage, TextBlock, Wrapper } from "./styles";
import { IBlockHeader } from "./types";

const BlockHeader: React.FC<IBlockHeader> = ({
  dpma,
  name,
  link_2d,
  link_3d,
  status,
  image,
  product_code
}) => {
  const [previewImage, setPreviewImage] = useState(image);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    product_code &&
      fetch(
        `https://1cmpg.mospromgaz.ru/mpg_unf/hs/production/getphoto?id=${product_code}`,
        {
          method: "GET",
          headers: {
            Authorization: "Basic RXhjaGFuZ2VfUHJvZDpFeDEzX1ByIWQ=",
          },
        }
      )
        .then((res) => res.text())
        .then((data) => {
          setPreviewImage(data);
        })
        .catch(() => {
          console.log(`Изображение для ${name} не загружено`);
        });
  }, [name, product_code]);

  
  return (
    <Wrapper $status={status}>
      <CTABlock>
        {link_2d && (
          <Button type="dashed" href={link_2d} target="_blank" shape="circle">
            2D
          </Button>
        )}
        {link_3d && (
          <Button type="dashed" href={link_3d} shape="circle">
            3D
          </Button>
        )}
      </CTABlock>
      <TextBlock>
        <Typography.Text>{dpma}</Typography.Text>
        <Typography.Text strong>{name}</Typography.Text>
      </TextBlock>
      {previewImage ? (
        <>
          <PreviewImage src={`data:image/png;base64,${previewImage}`} onClick={showModal} alt={""} />
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
    </Wrapper>
  );
};

export default BlockHeader;
