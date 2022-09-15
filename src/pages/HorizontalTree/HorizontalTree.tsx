//@ts-nocheck

import React, { useEffect, useState } from 'react'
import Tree from 'react-d3-tree';
import { useCenteredTree } from '../../hooks/useCenteredTree';
import { ICON_SIZE, NODE_SIZE, RELATIVE_NODE_SIZE } from './constants';
import TreeNode from './components/TreeNode/TreeNode';

const HorizontalTree = () => {
  const [translate, containerRef] = useCenteredTree(NODE_SIZE);
  const [mockedData, setMockedData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('./data/mockedData.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        setMockedData(data)
        setIsLoading(false)
      })
  }, [])


  return (
    isLoading ? (
      <>Loading</>
    ) : (
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
  )
}

export default HorizontalTree