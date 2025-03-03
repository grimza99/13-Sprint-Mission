import styled, { css } from "styled-components";
import theme from "@/styles/theme";
//

export const InactiveBtnHeart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 64px;
  height: 24px;
  border: none;
  font: ${theme.font.H7Regular};
  background: ${theme.color.gray50};
  color: ${theme.color.gray500};
`;

export const ActiveBtnHeart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 64px;
  height: 24px;
  border: none;
  font: ${theme.font.H7Regular};
  background: ${theme.color.gray50};
  color: ${theme.color.gray500};
`;
