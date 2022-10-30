import { InfoOutlined } from "@ant-design/icons";
import { Button, Progress, Typography } from "antd";
import React from "react";
import BlockHeader from "../BlockHeader/BlockHeader";
import { Block, Details } from "./styles";
import { TInfoBlockProps } from "./types";

const InfoBlock: React.FC<TInfoBlockProps> = ({ infoBlockSize, data }) => {
  const progress: number = Math.floor(
    (100 *
      data.attributes!.operations.filter((item: any) => item.done).length) /
      data.attributes!.operations.length
  );

  /* const headerColor = (status: number) => {
    if (status === 0) return grey[500];
    if (status === 1) return `linear-gradient(0.5turn, ${yellow[500]}, ${grey[100]})`;
    if (status === 2) return `linear-gradient(0.5turn, ${green[500]}, ${grey[100]})`;
  } */

  return data.attributes ? (
    <foreignObject {...infoBlockSize} style={{ cursor: "grab" }}>
      <Block>
        <BlockHeader
          dpma={data.attributes?.product_number}
          name={data.attributes?.product_name}
          link_2d=""
          link_3d=""
        />
        <Details>
          <Progress type="circle" percent={progress} width={40} />
          <Button shape="circle" icon={<InfoOutlined />} size="large" />
          <Typography.Title level={4} style={{ margin: 0 }}>
            {data.attributes.quantity}шт.
          </Typography.Title>
          <Typography.Title level={4} style={{ margin: 0 }}>
            {data.attributes.overall_time}ч
          </Typography.Title>
        </Details>
      </Block>
    </foreignObject>
  ) : (
    <></>
  );
};

export default InfoBlock;
