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
  flex-wrap: wrap;
`;

export const ChildrenBlock = styled.div`
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MainBlock = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PreviewImage = styled.img`
  max-height: 40px;
  max-width: 40px;
  cursor: pointer;
`;

export const ImagePlaceholder = styled.div`
  height: 40px;
  width: 40px;
`

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoBlock = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const OperationsBlock = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Border = styled.div`
  height: 40px;
  border-right: 1px solid ${grey[0]};
  opacity: 0.5;
`;

export const ModalImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;