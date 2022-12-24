import { grey } from "@ant-design/colors";
import styled from "styled-components";

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Menu = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 -1px 5px 0 ${grey[1]};
`;

export const Row = styled.div`
  display: flex;
  gap: 5px;
`;