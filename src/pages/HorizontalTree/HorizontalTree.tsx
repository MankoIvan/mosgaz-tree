//@ts-nocheck

import React from 'react'
import Tree from 'react-d3-tree';
import mockedData from '../../data/mockedData.json'
import { useCenteredTree } from '../../hooks/useCenteredTree';
import { ICON_SIZE, NODE_SIZE, RELATIVE_NODE_SIZE } from './constants';
import TreeNode from './components/TreeNode/TreeNode';

const HorizontalTree = () => {

  const [translate, containerRef] = useCenteredTree(NODE_SIZE);

  return (
    <div id="treeWrapper" ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Tree
        data={mockedData}
        translate={translate}
        orientation="horizontal"
        pathFunc="step"
        nodeSize={NODE_SIZE}
        renderCustomNodeElement={(rd3tProps) =>
          <TreeNode
            {...rd3tProps}
            infoBlockProps={{
              width: NODE_SIZE.x * RELATIVE_NODE_SIZE,
              height: NODE_SIZE.y,
              y: ICON_SIZE,
              x: -(NODE_SIZE.x * RELATIVE_NODE_SIZE) / 2
            }}
          />
        }
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
      />
    </div>
  )
}

export default HorizontalTree