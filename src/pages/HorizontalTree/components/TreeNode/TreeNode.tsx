import React from "react";
import NodeIcon from "../NodeIcon/NodeIcon";
import InfoBlock from "../InfoBlock/InfoBlock";
import { TTreeNodeProps } from "./types";

const TreeNode: React.FC<TTreeNodeProps> = ({
  data,
  toggleNode,
  infoBlockSize,
  isRootNode
}) => {
  console.log(data)
  const isBranchNode = !!data.children?.length && !isRootNode;
  const isLeafNode = !data.children?.length && !isRootNode;

  return (
    <g strokeWidth={0}>
      <NodeIcon
        isRootNode={isRootNode}
        isBranchNode={isBranchNode}
        isLeafNode={isLeafNode}
        onClick={toggleNode}
      />
      <InfoBlock infoBlockSize={infoBlockSize} data={data} />
    </g>
  );
};

export default TreeNode;
