import { green, grey, yellow } from "@ant-design/colors";
import styled, { css } from "styled-components";

export const IconWrapper = styled.div<{ $status: number, $large: boolean }>`
  font-size: 16px;
  line-height: 16px;
  padding: 2px;
  border-radius: 50%;

  ${({ $large }): any =>
    $large
      ? css`  
        padding: 8px;
        font-size: 32px;
        line-height: 32px;
      `
      : ''}

  ${({ $status }) => {
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
export const MiniatureWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 5px;
`
export const SideText = styled.div`
  display: flex;
  flex-direction: column;
`