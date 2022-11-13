import React, { useEffect, useState } from "react";
import { TDataOperation } from "../../../../types";
import OperationMiniature from "../OperationMiniature/OperationMiniature";
import { OperationsWrapper } from "./styles";
import { TLifeCycleProps } from "./types";

const LifeCycle: React.FC<TLifeCycleProps> = ({
  operations,
  large = false,
}) => {
  const [groupedOperations, setGroupedOperations] = useState<
    TDataOperation[][]
  >([]);

  useEffect(() => {
    const groupedOperations = [];
    let subOperGroup: TDataOperation[] = [];
    let prevArea = operations[0].area_code;
    for (let i = 0; i < operations.length; i++) {
      if (operations[i].area_code === prevArea) {
        subOperGroup.push(operations[i]);
      } else {
        groupedOperations.push(subOperGroup);
        subOperGroup = [operations[i]];
      }
      prevArea = operations[i].area_code;
    }
    groupedOperations.push(subOperGroup);
    setGroupedOperations(groupedOperations);
  }, [operations]);

  return (
    <OperationsWrapper $large={large}>
      {groupedOperations.map((operationsGroup, index) => (
        <OperationMiniature
          operationsGroup={operationsGroup}
          key={index}
          large={large}
        />
      ))}
    </OperationsWrapper>
  );
};

export default LifeCycle;
