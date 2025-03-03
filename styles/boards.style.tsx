import styled from "styled-components";
import theme from "../styles/theme";

export const Contents = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const SubTitle = styled.p`
  font: ${theme.font.H3Bold};
  color: ${theme.color.gray900};
`;

export const BestCardFlex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
export const SubBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  width: 88px;
`;

export const ArticlesFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
