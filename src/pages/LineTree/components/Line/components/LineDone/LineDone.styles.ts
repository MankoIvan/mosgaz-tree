import { grey } from "@ant-design/colors";
import styled from "styled-components";

export const LineWrapper = styled.div`
  padding: 5px;
  border: 1px solid ${grey[0]};
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 12.5px;
  flex-wrap: wrap;
`;

export const MainBlock = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const PreviewImage = styled.img`
  max-width: 24px;
  cursor: pointer;
`;

export const ImagePlaceholder = styled.div`
  padding: 4px;
  font-size: 16px;
  opacity: 0.5;
  color: ${grey[0]};
  margin: 0;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.3;
`;

export const InfoBlock = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const InfoBlockAdditional = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  opacity: 0.3;
`;

export const OperationsBlock = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  opacity: 0.3;
`;

export const Border = styled.div`
  height: 24px;
  border-right: 1px solid ${grey[0]};
  opacity: 0.5;
`;

export const ModalImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;