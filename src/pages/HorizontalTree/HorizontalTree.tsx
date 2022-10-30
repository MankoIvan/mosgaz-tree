import React, { useEffect, useState } from 'react'
import Tree from 'react-d3-tree';
import { useCenteredTree } from '../../hooks/useCenteredTree';
import { ICON_SIZE, NODE_SIZE, RELATIVE_NODE_SIZE } from './constants';
import TreeNode from './components/TreeNode/TreeNode';
import { fetchDataFromLocal } from '../../api';
import { TData, TDataforTree } from '../../types';

const defaultData: TData = {
  name: ''
}

const HorizontalTree = () => {
  const [translate, containerRef] = useCenteredTree(NODE_SIZE);
  const [mockedData, setMockedData] = useState(defaultData)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchDataFromLocal()
      .then(data => {
        setMockedData(data)
        setIsLoading(false)
      })
  }, [])

/*   useEffect(() => {var myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic RXhjaGFuZ2VfUHJvZDpFeDEzX1ByIWQ=");
    
    fetch("https://1cmpg.mospromgaz.ru/mpg_unf/hs/production/gettree?id=10", {
      method: 'GET',
      headers: {
        Authorization: 'Basic RXhjaGFuZ2VfUHJvZDpFeDEzX1ByIWQ='
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setMockedData(data)
        setIsLoading(false)
      })
      .catch(error => console.log('error', error));
  }, []) */

  return (
    isLoading ? (
      <>Loading</>
    ) : (
      <div id="treeWrapper" ref={containerRef} style={{ width: "100%", height: "100%" }}>
        <Tree
          data={mockedData as TDataforTree}
          translate={translate}
          orientation="horizontal"
          pathFunc="step"
          nodeSize={NODE_SIZE}
          renderCustomNodeElement={(rd3tProps) =>
            <TreeNode
              data={rd3tProps.nodeDatum as TData}
              toggleNode={rd3tProps.toggleNode}
              infoBlockSize={{
                width: NODE_SIZE.x * RELATIVE_NODE_SIZE,
                height: NODE_SIZE.y,
                y: ICON_SIZE,
                x: -(NODE_SIZE.x * RELATIVE_NODE_SIZE) / 2
              }}
              isRootNode={rd3tProps.nodeDatum.__rd3t.depth === 0}
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