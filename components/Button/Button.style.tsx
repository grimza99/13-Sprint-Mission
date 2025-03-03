import styled, { css } from "styled-components";
import theme from "../../styles/theme";
//

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: none;
  font: ${theme.font.H5Bold};
  color: ${theme.color.gray100};
  background-color: ${theme.color.blue};
  cursor: pointer;
  &:disabled {
    background-color: ${theme.color.gray400};
  }
`;
