import React, { useEffect } from 'react'
import Tree from 'react-d3-tree';
import { CustomNodeElementProps } from 'react-d3-tree/lib/types/common';
import mockedData from '../../data/mockedData.json'
import { useCenteredTree } from '../../hooks/useCenteredTree';

type TForeignObjectProps = {
  width: number,
  height: number,
  x: number,
  y: number
}

const TreeBuilder = () => {
  const [translate, containerRef] = useCenteredTree();
  useEffect(() => {
    console.log(mockedData.children[0])
  }, [])

  const nodeSize = {
    x: 400,
    y: 400
  };
  const renderForeignObjectNode = ({
    nodeDatum,
    toggleNode,
    foreignObjectProps
  }: CustomNodeElementProps & { foreignObjectProps: TForeignObjectProps }) => {
    const isRootNode = nodeDatum.__rd3t.depth === 0;
    const isBranchNode = !!nodeDatum.children?.length && !isRootNode;
    const isLeafNode = !nodeDatum.children?.length && !isRootNode;


    return (
      <g onClick={toggleNode} strokeWidth={0}>
        {isRootNode && (
          <>
            <circle r={18} fill="#adadad" />
            <circle r={16} fill="#fff" />
            <circle r={14} fill="#adadad" />
          </>
        )}
        {isLeafNode && (
          <>
            <circle r={18} fill="#578aef" />
            <circle r={16} fill="#fff" />
            <circle r={14} fill="#578aef" />
          </>
        )}
        {isBranchNode && (
          <rect
            x="-18"
            y="-18"
            width="36"
            height="36"
            fill="#adadad"
            transform="rotate(45)"
            rx="4"
          />
        )}
        <foreignObject {...foreignObjectProps}>
          <div style={{ border: "1px solid red" }}>
            {nodeDatum.name}
          </div>
        </foreignObject>
      </g>
    );
  };

  return (
    <div id="treeWrapper" ref={containerRef} style={{ width: "100%", height: "100vh" }}>
      <Tree
        data={mockedData.children[0]}
        translate={translate}
        orientation="horizontal"
        pathFunc="step"
        nodeSize={nodeSize}
        renderCustomNodeElement={(rd3tProps) =>
          renderForeignObjectNode({
            ...rd3tProps,
            foreignObjectProps: {
              width: nodeSize.x * 0.75,
              height: nodeSize.y,
              y: 32,
              x: -(nodeSize.x * 0.75) / 2
            }
          })
        }
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
      />
    </div>
  )
}

export default TreeBuilder