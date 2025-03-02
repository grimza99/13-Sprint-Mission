import styled from "styled-components";
import theme from "../styles/theme";

export const Contents = styled.div`
  width: 1200px;
`;

export const SubTitle = styled.p`
  font: ${theme.font.H3Bold};
  color: ${theme.color.gray900};
`;

export const SubBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  width: 88px;
`;
