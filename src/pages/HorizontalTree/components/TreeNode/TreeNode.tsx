import React from 'react';
import { CustomNodeElementProps } from 'react-d3-tree/lib/types/common';
import NodeIcon from '../NodeIcon/NodeIcon';
import InfoBlock from '../InfoBlock/InfoBlock';
import { TForeignObject } from '../../types';

const TreeNode = ({
  nodeDatum,
  toggleNode,
  infoBlockProps
}: CustomNodeElementProps & { infoBlockProps: TForeignObject }) => {
  const isRootNode = nodeDatum.__rd3t.depth === 0;
  const isBranchNode = !!nodeDatum.children?.length && !isRootNode;
  const isLeafNode = !nodeDatum.children?.length && !isRootNode;

  return (
    <g strokeWidth={0}>
      <NodeIcon
        isRootNode={isRootNode}
        isBranchNode={isBranchNode}
        isLeafNode={isLeafNode}
        onClick={toggleNode}
      />
      <InfoBlock 
        infoBlockProps={infoBlockProps}
        nodeDatum={nodeDatum}
      />
    </g >
  );
}

export default TreeNode