import { grey } from "@ant-design/colors";
import styled from "styled-components";

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LineWrapper = styled.div`
  padding: 5px;
  border: 1px solid ${grey[0]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12.5px;
`;

export const ChildrenBlock = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TextBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const InfoBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const OperationsBlock = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Border = styled.div`
  height: 40px;
  border-right: 1px solid ${grey[0]};
  opacity: 0.5;
`