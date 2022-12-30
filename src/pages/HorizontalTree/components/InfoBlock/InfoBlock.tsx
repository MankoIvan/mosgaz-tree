import { Progress, Typography } from "antd";
import React from "react";
import { TDataOperation } from "../../../../types";
import { getProgress } from "../../../../utils/getProgress";
import { getTime } from "../../../../utils/getTime";
import BlockHeader from "../BlockHeader/BlockHeader";
import LifeCycle from "../LifeCycle/LifeCycle";
import MoreInfo from "../../../../components/MoreInfo/MoreInfo";
import { Block, Details } from "./styles";
import { TInfoBlockProps } from "./types";

const InfoBlock: React.FC<TInfoBlockProps> = ({ infoBlockSize, data }) => {
  const progress = getProgress(data.attributes?.operations as TDataOperation[]);
  return data.attributes ? (
    <foreignObject {...infoBlockSize} style={{ cursor: "grab" }}>
      <Block>
        <BlockHeader
          dpma={data.attributes.product_number}
          name={data.name}
          link_2d={data.attributes.view_2d}
          link_3d={data.attributes.view_3d}
          status={data.attributes.status}
          image={data.attributes.image}
          product_code={data.attributes.product_code}
        />
        <Details>
          <Progress type="circle" percent={progress} width={40} />
          <MoreInfo data={data} />
          <Typography.Title level={4} style={{ margin: 0 }}>
            {data.attributes.quantity}шт.
          </Typography.Title>
          <Typography.Title level={4} style={{ margin: 0 }}>
            {getTime(Number(data.attributes.overall_time)) || "0ч"}
          </Typography.Title>
        </Details>
        <LifeCycle operations={data.attributes.operations} />
      </Block>
    </foreignObject>
  ) : (
    <></>
  );
};

export default InfoBlock;
