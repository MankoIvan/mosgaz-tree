import React from 'react'
import Tree from 'react-d3-tree';
import mockedData from '../../data/mockedData.json'
import { useCenteredTree } from '../../hooks/useCenteredTree';
import TreeNode from '../TreeNode/TreeNode';


const TreeBuilder = () => {
  const [translate, containerRef] = useCenteredTree();

  const nodeSize = {
    x: 400,
    y: 200
  };

  return (
    <div id="treeWrapper" ref={containerRef} style={{ width: "100%", height: "100vh" }}>
      <Tree
        data={mockedData}
        translate={translate}
        orientation="horizontal"
        pathFunc="step"
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          <TreeNode
            {...rd3tProps}
            foreignObjectProps={{
              width: nodeSize.x * 0.75,
              height: nodeSize.y,
              y: 32,
              x: -(nodeSize.x * 0.75) / 2
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

export default TreeBuilder