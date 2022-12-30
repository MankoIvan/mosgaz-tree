import React, { FC } from "react";
import Line from "./components/Line/Line";
import { TreeWrapper } from "./LineTree.styles";
import { TLineTreeProps } from "./LineTree.types";

const LineTree: FC<TLineTreeProps> = ({ treeData, highlightWIP }) => {
  return treeData ? (
    <TreeWrapper>
      <Line data={treeData} depth={0} highlightWIP={highlightWIP} />
    </TreeWrapper>
  ) : null;
};

export default LineTree;
