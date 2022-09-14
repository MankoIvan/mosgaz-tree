import React from 'react'
import { blue, grey } from '@mui/material/colors'
import { ICON_SIZE } from '../../constants';

type TNodeIcon = {
  isRootNode: boolean;
  isLeafNode: boolean;
  isBranchNode: boolean;
  onClick: () => void;
}

const NodeIcon = ({ isRootNode, isLeafNode, isBranchNode, onClick }: TNodeIcon) => {
  const getIcon = () => {

    if (isRootNode) {
      return (
        <>
          <circle r={ICON_SIZE / 2} fill={grey[500]} />
          <circle r={ICON_SIZE / 2 - 2} fill={grey[50]} />
          <circle r={ICON_SIZE / 2 - 4} fill={grey[500]} />
        </>
      )
    } else if (isLeafNode) {
      return (
        <>
          <circle r={ICON_SIZE / 2} fill={blue[700]} />
          <circle r={ICON_SIZE / 2 - 2} fill={grey[50]} />
          <circle r={ICON_SIZE / 2 - 4} fill={blue[700]} />
        </>
      )
    } else if (isBranchNode) {
      return (
        <>
          <rect
            x={-ICON_SIZE / 2}
            y={-ICON_SIZE / 2}
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={grey[500]}
            transform="rotate(45)"
            rx="4"
          />
          <rect
            x={-ICON_SIZE / 2 + 2}
            y={-ICON_SIZE / 2 + 2}
            width={ICON_SIZE - 4}
            height={ICON_SIZE - 4}
            fill={grey[50]}
            transform="rotate(45)"
            rx="4"
          />
          <rect
            x={0 - ICON_SIZE / 2 + 4}
            y={0 - ICON_SIZE / 2 + 4}
            width={ICON_SIZE - 8}
            height={ICON_SIZE - 8}
            fill={grey[500]}
            transform="rotate(45)"
            rx="4"
          />
        </>
      )
    }
  }
  return (
    <g onClick={onClick}>
      {getIcon()}
    </g>
  )
}

export default NodeIcon