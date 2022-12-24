import React, { useEffect, useState } from "react";
import { TDataOperation } from "../../../../types";
import { groupByAreas } from "../../../../utils/groupByAreas";
import OperationMiniature from "../../../../components/OperationMiniature/OperationMiniature";
import { OperationsWrapper } from "./styles";
import { TLifeCycleProps } from "./types";

const LifeCycle: React.FC<TLifeCycleProps> = ({
  operations,
}) => {
  const [groupedOperations, setGroupedOperations] = useState<
    TDataOperation[][]
  >([]);

  useEffect(() => {
    setGroupedOperations(groupByAreas(operations));
  }, [operations]);

  return (
    <OperationsWrapper>
      {groupedOperations.map((operationsGroup, index) => (
        <OperationMiniature
          operationsGroup={operationsGroup}
          key={index}
          size={16}
        />
      ))}
    </OperationsWrapper>
  );
};

export default LifeCycle;
