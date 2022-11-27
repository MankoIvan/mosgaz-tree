import styled from "styled-components";
import { grey } from '@ant-design/colors';

export const Table = styled.table`
  width: 100%;
`
export const Row = styled.tr`
  border: 1px solid ${grey[0]};
`
export const HeaderCell = styled.th`
  padding: 5px;
`
export const Cell = styled.td`
  padding: 5px;
  border: 1px solid ${grey[0]};
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`