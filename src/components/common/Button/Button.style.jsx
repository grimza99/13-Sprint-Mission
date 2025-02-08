import styled from "styled-components";
import theme from "../../../style/theme";
//
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  :active {
    background-color: ${theme.color.blue};
  }
`;
