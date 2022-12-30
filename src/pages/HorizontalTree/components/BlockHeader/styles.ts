import { grey, green, yellow } from '@ant-design/colors';
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{$status: number}>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;

  ${({$status}) => {
    if ($status === 0) {
      return css`
        background: linear-gradient(0.5turn, ${grey[1]}, white);
      `;
    }
    if ($status === 1) {
      return css`
        background: linear-gradient(0.5turn, ${yellow[5]}, white);
      `;
    }
    if ($status === 2) {
      return css`
        background: linear-gradient(0.5turn, ${green[5]}, white);
      `;
    }
  }}
`
export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  justify-content: space-between;
`
export const CTABlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const PreviewImage = styled.img`
  max-width: 40px;
  cursor: pointer;
`;

export const ImagePlaceholder = styled.div`
  padding: 8px;
  font-size: 24px;
  opacity: 0.5;
  color: ${grey[0]};
`;

export const ModalImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;