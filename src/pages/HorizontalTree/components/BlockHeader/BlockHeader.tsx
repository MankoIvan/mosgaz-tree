import { Button, Typography } from "antd";
import React from "react";
import { CTABlock, TextBlock, Wrapper } from "./styles";
import { IBlockHeader } from "./types";

const BlockHeader: React.FC<IBlockHeader> = ({
  dpma,
  name,
  link_2d,
  link_3d,
  status,
}) => {
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
    </Wrapper>
  );
};

export default BlockHeader;
