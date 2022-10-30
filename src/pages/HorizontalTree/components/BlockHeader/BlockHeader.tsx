import { Button, Typography } from "antd";
import React from "react";
import { CTABlock, TextBlock, Wrapper } from "./styles";
import { IBlockHeader } from "./types";

const BlockHeader: React.FC<IBlockHeader> = ({
  dpma,
  name,
  link_2d,
  link_3d,
}) => {
  return (
    <Wrapper>
      <CTABlock>
      <Button type="dashed" href={link_2d} target='_blank' shape="circle">2D</Button>
      <Button type="dashed" href={link_3d} target='_blank' shape="circle">3D</Button>
      </CTABlock>
      <TextBlock>
        <Typography.Text>{dpma}</Typography.Text>
        <Typography.Text strong>{name}</Typography.Text>
      </TextBlock>
    </Wrapper>
  );
};

export default BlockHeader;
