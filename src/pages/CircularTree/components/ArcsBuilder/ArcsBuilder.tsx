import React from 'react'
import Arc from '../Arc/Arc';

type nodeData = {
  name: string,
  attributes: Record<string, any>,
  children: nodeData[]
}

type TArcsBuilder = nodeData & {
  currentDepth: number;
  totalDepth: number;
  start_angle: number;
  end_angle: number;
}

const getDepth = (nodeData: nodeData): number => {
  return 1 + Math.max(0, ...nodeData.children.map((item) => getDepth(item)));
}

const ArcsBuilder = ({
  children,
  currentDepth,
  totalDepth,
  start_angle,
  end_angle
}: TArcsBuilder) => {

  const arcColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

  const arcProps = {
    cx: 200,
    cy: 200,
    radius: 200 * currentDepth / totalDepth,
    start_angle: start_angle,
    end_angle: end_angle,
    thickness: 200 / totalDepth,
    color: arcColor
  }

  return (
    <>
      {(arcProps.start_angle % 360) === (arcProps.end_angle % 360) ? (
        <circle cx={arcProps.cx} cy={arcProps.cy} r={arcProps.thickness} stroke="none" fill={arcColor} />
      ) : (
        <Arc {...arcProps} />
      )}
      {children.length && children.map((child, index) => {

        const childArcProps = {
          ...child,
          currentDepth: currentDepth + 1,
          totalDepth,
          start_angle: start_angle + index * ((end_angle - start_angle) / children.length),
          end_angle: start_angle + (index + 1) * ((end_angle - start_angle) / children.length),
        }

        return (
          <ArcsBuilder {...childArcProps} key={index}/>
        )
      })}
    </>
  )
}

export default ArcsBuilder