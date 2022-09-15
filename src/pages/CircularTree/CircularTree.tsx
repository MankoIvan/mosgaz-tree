//@ts-nocheck
import React, { useEffect, useState } from 'react'
import ArcsBuilder from './components/ArcsBuilder/ArcsBuilder';

type nodeData = {
  name: string,
  attributes: Record<string, any>,
  children: nodeData[]
}

const CircularTree = () => {
  const [mockedData, setMockedData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/data/mockedData.json')
      .then(res => res.json())
      .then(data => {
        setMockedData(data)
        setIsLoading(false)
      })
  }, [])

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
    isLoading ? (
      <>Loading</>
    ) : (
      <svg viewBox="0 0 400 400" width="50%" height="50%">
        <ArcsBuilder {...arcsBuilderProps} />
      </svg>
    )
  )
}

export default CircularTree