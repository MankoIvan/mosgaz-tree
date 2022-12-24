import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Progress, Typography } from "antd";
import React, { FC, useState } from "react";
import MoreInfo from "../../../../components/MoreInfo/MoreInfo";
import { getProgress } from "../../../../utils/getProgress";
import { getTime } from "../../../../utils/getTime";
import OperationMiniature from "../../../../components/OperationMiniature/OperationMiniature";
import {
  BlockWrapper,
  Border,
  ChildrenBlock,
  InfoBlock,
  LineWrapper,
  OperationsBlock,
  TextBlock,
} from "./Line.styles";
import { TLineProps } from "./Line.types";
import { groupByAreas } from "../../../../utils/groupByAreas";

const Line: FC<TLineProps> = ({ data, depth }) => {
  const { name, attributes, children } = data;

  const [showChildren, setShowChildren] = useState(depth < 1);

  return (
    <>
      <BlockWrapper>
        <LineWrapper>
          {!!children && (
            <Button
              shape="circle"
              icon={showChildren ? <MinusOutlined /> : <PlusOutlined />}
              size="large"
              onClick={() => setShowChildren((prev) => !prev)}
              disabled={!children.length}
              style={{ opacity: !children.length ? 0.5 : 1 }}
            />
          )}

          <Border />

          <TextBlock>
            <Typography.Text>{attributes?.product_number}</Typography.Text>
            <Typography.Text strong>{name}</Typography.Text>
          </TextBlock>

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

        {!!children?.length && showChildren && (
          <ChildrenBlock>
            {children.map((item, index) => (
              <Line data={item} depth={depth + 1} key={index} />
            ))}
          </ChildrenBlock>
        )}
      </BlockWrapper>
    </>
  );
};

export default Line;
