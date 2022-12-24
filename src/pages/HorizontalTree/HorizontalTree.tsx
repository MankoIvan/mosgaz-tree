import React from "react";
import Tree from "react-d3-tree";
import { useCenteredTree } from "../../hooks/useCenteredTree";
import {
  ICON_SIZE,
  NODE_SIZE,
  RELATIVE_NODE_SIZE,
  VERTICAL_NODE_SIZE,
} from "./constants";
import TreeNode from "./components/TreeNode/TreeNode";
import { TData } from "../../types";
import { THorizontalTree } from "./types";

const HorizontalTree: React.FC<THorizontalTree> = ({
  orientation,
  treeData,
}) => {
  const [translate, containerRef] = useCenteredTree(NODE_SIZE);

  return (
    <div
      id="treeWrapper"
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    >
      <Tree
        data={treeData}
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
