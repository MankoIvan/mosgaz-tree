import styled, { css } from "styled-components";

export const OperationsWrapper = styled.div<{ $large: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;

  ${({ $large }): any =>
    $large
      ? css`  
        flex-wrap: wrap;
        gap: 8px;
      `
      : ''}
`