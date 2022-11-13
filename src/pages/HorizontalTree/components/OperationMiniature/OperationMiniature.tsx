import { green, grey, yellow } from "@ant-design/colors";
import { Popover, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import {
  BoxIcon,
  BrushIcon,
  CartIcon,
  CNCIcon,
  EngineIcon,
  SparkIcon,
  WrenchesIcon,
} from "../../../../icons";
import { IconWrapper, MiniatureWrapper } from "./styles";
import { TOperationMiniatureProps } from "./types";

const OperationMiniature: React.FC<TOperationMiniatureProps> = ({
  operationsGroup,
  large = false,
}) => {
  const areaCode = operationsGroup[0].area_code;
  const area = operationsGroup[0].area;
  const opersDone = operationsGroup.reduce((acc, item) => {
    return item.status === 2 ? acc + 1 : acc;
  }, 0);
  const opersTotal = operationsGroup.length;

  const groupStatus = operationsGroup.reduce((acc, item) => {
    return item.status < acc ? item.status : acc;
  }, 2);

  const icon = useMemo(() => {
    switch (areaCode) {
      case "Уч 01":
        return <CartIcon />;
      case "Уч 02":
        return <BrushIcon />;
      case "Уч 03":
        return <BoxIcon />;
      case "Уч 04":
        return <CNCIcon />;
      case "Уч 05":
        return <EngineIcon />;
      case "Уч 06":
        return <SparkIcon />;
      case "Уч 07":
        return <WrenchesIcon />;
    }
  }, [areaCode]);

  const OperationsTimeline = () => {
    return (
      <Timeline>
        {operationsGroup.map((item) => {
          const color =
            item.status === 2
              ? green[5]
              : item.status === 1
              ? yellow[5]
              : grey[5];
          return <Timeline.Item color={color}>{item.name}</Timeline.Item>;
        })}
      </Timeline>
    );
  };

  return (
    <Popover placement="bottom" title={area} content={<OperationsTimeline />}>
      <MiniatureWrapper>
        {large && <Typography.Text>{area}</Typography.Text>}
        <IconWrapper $status={groupStatus} $large={large}>
          {icon}
        </IconWrapper>
        {large && (
          <Typography.Text>
            {opersDone}/{opersTotal}
          </Typography.Text>
        )}
      </MiniatureWrapper>
    </Popover>
  );
};

export default OperationMiniature;
