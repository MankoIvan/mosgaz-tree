import { blue } from "@ant-design/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`
export const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const IconWrapper = styled.div`
  padding: 8px;
  font-size: 32px;
  line-height: 32px;
  border-radius: 50%;
  background: linear-gradient(0.5turn, ${blue[1]}, white);
`