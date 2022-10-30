import React from "react";
import { blue, grey } from "@ant-design/colors";
import { ICON_SIZE } from "../../constants";
import { TNodeIconProps } from "./types";

const NodeIcon = ({
  isRootNode,
  isLeafNode,
  isBranchNode,
  onClick,
}: TNodeIconProps) => {
  const getIcon = () => {
    if (isRootNode) {
      return (
        <>
          <circle r={ICON_SIZE / 2} fill={grey[5]} />
          <circle r={ICON_SIZE / 2 - 2} fill={"white"} />
          <circle r={ICON_SIZE / 2 - 4} fill={grey[5]} />
        </>
      );
    } else if (isLeafNode) {
      return (
        <>
          <circle r={ICON_SIZE / 2} fill={blue[5]} />
          <circle r={ICON_SIZE / 2 - 2} fill={"white"} />
          <circle r={ICON_SIZE / 2 - 4} fill={blue[5]} />
        </>
      );
    } else if (isBranchNode) {
      return (
        <>
          <rect
            x={-ICON_SIZE / 2}
            y={-ICON_SIZE / 2}
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={grey[5]}
            transform="rotate(45)"
            rx="4"
          />
          <rect
            x={-ICON_SIZE / 2 + 2}
            y={-ICON_SIZE / 2 + 2}
            width={ICON_SIZE - 4}
            height={ICON_SIZE - 4}
            fill={"white"}
            transform="rotate(45)"
            rx="4"
          />
          <rect
            x={0 - ICON_SIZE / 2 + 4}
            y={0 - ICON_SIZE / 2 + 4}
            width={ICON_SIZE - 8}
            height={ICON_SIZE - 8}
            fill={grey[5]}
            transform="rotate(45)"
            rx="4"
          />
        </>
      );
    }
  };
  return <g onClick={onClick}>{getIcon()}</g>;
};

export default NodeIcon;
