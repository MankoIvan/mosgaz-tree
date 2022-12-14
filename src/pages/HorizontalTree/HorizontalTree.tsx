import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "../../hooks/useCenteredTree";
import {
  ICON_SIZE,
  NODE_SIZE,
  RELATIVE_NODE_SIZE,
  VERTICAL_NODE_SIZE,
} from "./constants";
import TreeNode from "./components/TreeNode/TreeNode";
import { TData, TDataforTree } from "../../types";
import { fetchDataFromLocal } from "../../api";
import { Spin, Typography } from "antd";
import { LoaderWrapper } from "./styles";
import { FrownOutlined } from "@ant-design/icons";
import { THorizontalTree } from "./types";

const defaultData: TData = {
  name: "",
};

const HorizontalTree: React.FC<THorizontalTree> = ({ orientation }) => {
  const [translate, containerRef] = useCenteredTree(NODE_SIZE);
  const [mockedData, setMockedData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingFalied, setLoadingFalied] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      fetchDataFromLocal()
        .then((data) => {
          setMockedData(data);
          setLoadingFalied(false);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setLoadingFalied(true);
        });
    } else {
      var params = new URLSearchParams(document.location.search);
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Basic RXhjaGFuZ2VfUHJvZDpFeDEzX1ByIWQ="
      );

      fetch(
        `https://1cmpg.mospromgaz.ru/mpg_unf/hs/production/gettree?id=${params.get(
          "id"
        )}`,
        {
          method: "GET",
          headers: {
            Authorization: "Basic RXhjaGFuZ2VfUHJvZDpFeDEzX1ByIWQ=",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMockedData(data);
          setLoadingFalied(false);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
          setLoadingFalied(true);
        });
    }
  }, []);

  return isLoading ? (
    <LoaderWrapper>
      <Spin size="large" tip="Loading..." />
    </LoaderWrapper>
  ) : loadingFalied ? (
    <LoaderWrapper>
      <Typography.Title level={3}>
        <FrownOutlined /> Loading failed
      </Typography.Title>
      <Typography.Text>Please check the console output</Typography.Text>
    </LoaderWrapper>
  ) : (
    <div
      id="treeWrapper"
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    >
      <Tree
        data={mockedData as TDataforTree}
        translate={translate}
        orientation={orientation ? "horizontal" : "vertical"}
        pathFunc="step"
        nodeSize={orientation ? NODE_SIZE : VERTICAL_NODE_SIZE}
        initialDepth={1}
        renderCustomNodeElement={(rd3tProps) => (
          <TreeNode
            data={rd3tProps.nodeDatum as TData}
            toggleNode={rd3tProps.toggleNode}
            infoBlockSize={{
              width: NODE_SIZE.x * RELATIVE_NODE_SIZE,
              height: NODE_SIZE.y,
              y: ICON_SIZE,
              x: -(NODE_SIZE.x * RELATIVE_NODE_SIZE) / 2,
            }}
            isRootNode={rd3tProps.nodeDatum.__rd3t.depth === 0}
          />
        )}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
      />
    </div>
  );
};

export default HorizontalTree;
