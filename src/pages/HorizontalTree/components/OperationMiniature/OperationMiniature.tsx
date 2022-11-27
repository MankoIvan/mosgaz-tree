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
import { getTime } from "../../../../utils/getTime";
import { IconWrapper, MiniatureWrapper, SideText } from "./styles";
import { TOperationMiniatureProps } from "./types";

const OperationMiniature: React.FC<TOperationMiniatureProps> = ({
  operationsGroup,
  large = false,
  showOperations = true,
  showSideText = false,
}) => {
  const areaCode = operationsGroup[0].area_code;
  const area = operationsGroup[0].area;

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
        {operationsGroup.map((item, index) => {
          const color =
            item.status === 2
              ? green[5]
              : item.status === 1
              ? yellow[5]
              : grey[5];
          const time = getTime(Number(item.time));
          return (
            <Timeline.Item color={color} key={index}>
              {item.name} {time ? `(${time})` : ""}
            </Timeline.Item>
          );
        })}
      </Timeline>
    );
  };

  return area && areaCode ? (
    <Popover
      placement="bottom"
      title={area}
      content={<OperationsTimeline />}
      open={showOperations ? undefined : false}
    >
      <MiniatureWrapper>
        <IconWrapper $status={groupStatus} $large={large}>
          {icon}
        </IconWrapper>
        {showSideText && (
          <SideText>
            <Typography.Text>{area}</Typography.Text>
            {operationsGroup.map((item, index) => {
              const time = getTime(Number(item.time));
              return (
                <Typography.Text type="secondary" key={index}>
                  {item.name} {time ? `(${time})` : ""}
                </Typography.Text>
              );
            })}
          </SideText>
        )}
      </MiniatureWrapper>
    </Popover>
  ) : (
    <></>
  );
};

export default OperationMiniature;
