import React from 'react'
import mockedData from '../../data/mockedData.json';
import ArcsBuilder from './components/ArcsBuilder/ArcsBuilder';

type nodeData = {
  name: string,
  attributes: Record<string, any>,
  children: nodeData[]
}

const CircularTree = () => {

  const getDepth = (nodeData: nodeData): number => {
    return 1 + Math.max(0, ...nodeData.children.map((item) => getDepth(item)));
  }

  const arcsBuilderProps = {
    ...mockedData,
    totalDepth: getDepth(mockedData),
    currentDepth: 1,
    start_angle: 0,
    end_angle: 360

  }

  return (
    <>
      <svg viewBox="0 0 400 400" width="50%" height="50%">
        <ArcsBuilder {...arcsBuilderProps} />
      </svg>
    </>
  )
}

export default CircularTree