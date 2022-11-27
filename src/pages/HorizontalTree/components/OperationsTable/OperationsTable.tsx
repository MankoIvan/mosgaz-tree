import { Typography } from "antd";
import React from "react";
import { TDataOperation } from "../../../../types";
import { getTime } from "../../../../utils/getTime";
import { groupByAreas } from "../../../../utils/groupByAreas";
import OperationMiniature from "../OperationMiniature/OperationMiniature";
import { HeaderCell, Row, Table, Cell } from "./styles";

const OperationsTable: React.FC<{ operations: TDataOperation[] }> = ({
  operations,
}) => {
  const groupedOperations = groupByAreas(operations);
  return operations.length ? (
    <Table>
      <thead>
        <Row>
          <HeaderCell>
            <Typography.Text>Участок</Typography.Text>
          </HeaderCell>
          <HeaderCell>
            <Typography.Text>Время на участке</Typography.Text>
          </HeaderCell>
          <HeaderCell>
            <Typography.Text>Время операции</Typography.Text>
          </HeaderCell>
          <HeaderCell>
            <Typography.Text>Код операции</Typography.Text>
          </HeaderCell>
          <HeaderCell>
            <Typography.Text>Операция</Typography.Text>
          </HeaderCell>
          <HeaderCell>
            <Typography.Text>Исполнитель</Typography.Text>
          </HeaderCell>
        </Row>
      </thead>
      <tbody>
        {groupedOperations.map((group) => {
          const groupTime = getTime(
            group.reduce((acc, item) => acc + Number(item.time), 0)
          );
          return group.map((operation, index) => (
            <Row key={index}>
              {index === 0 && (
                <>
                  <Cell rowSpan={group.length}>
                    <OperationMiniature
                      operationsGroup={group}
                      large
                      showOperations={false}
                    />
                  </Cell>
                  <Cell rowSpan={group.length}>
                    <Typography.Text>{groupTime || "-"}</Typography.Text>
                  </Cell>
                </>
              )}
              <Cell>
                <Typography.Text>
                  {getTime(Number(operation.time)) || "-"}
                </Typography.Text>
              </Cell>
              <Cell>
                <Typography.Text>{operation.oper_code || "-"}</Typography.Text>
              </Cell>
              <Cell>
                <Typography.Text>{operation.name || "-"}</Typography.Text>
              </Cell>
              <Cell>
                <Typography.Text>
                  {operation.executed_by || "-"}
                </Typography.Text>
              </Cell>
            </Row>
          ));
        })}
      </tbody>
    </Table>
  ) : (
    <></>
  );
};

export default OperationsTable;
