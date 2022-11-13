import { Progress, Typography } from "antd";
import React from "react";
import { TDataOperation } from "../../../../types";
import BlockHeader from "../BlockHeader/BlockHeader";
import LifeCycle from "../LifeCycle/LifeCycle";
import MoreInfo from "../MoreInfo/MoreInfo";
import { Block, Details } from "./styles";
import { TInfoBlockProps } from "./types";

const InfoBlock: React.FC<TInfoBlockProps> = ({ infoBlockSize, data }) => {
  const progress: number = Math.floor(
    (100 *
      data.attributes!.operations.filter((item: TDataOperation) => item.status === 2).length) /
      data.attributes!.operations.length
  );

  return data.attributes ? (
    <foreignObject {...infoBlockSize} style={{ cursor: "grab" }}>
      <Block>
        <BlockHeader
          dpma={data.attributes.product_number}
          name={data.attributes.product_name}
          link_2d={data.attributes.view_2d}
          link_3d={data.attributes.view_3d}
          status={data.attributes.status}
        />
        <Details>
          <Progress type="circle" percent={progress} width={40} />
          <MoreInfo {...data} />
          <Typography.Title level={4} style={{ margin: 0 }}>
            {data.attributes.quantity}шт.
          </Typography.Title>
          <Typography.Title level={4} style={{ margin: 0 }}>
            {data.attributes.overall_time}ч
          </Typography.Title>
        </Details>
        <LifeCycle operations={data.attributes.operations}/>
      </Block>
    </foreignObject>
  ) : (
    <></>
  );
};

export default InfoBlock;
