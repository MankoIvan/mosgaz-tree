import { grey } from '@ant-design/colors';
import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
  box-shadow: 0 5px 5px 0 ${grey[1]};
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 5px;
`
export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`