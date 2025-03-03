import styled from "styled-components";
import theme from "@/styles/theme";
export const BestCardWrapper = styled.div`
  width: 384px;
  height: 169px;
  border: none;
  background-color: ${theme.color.gray50};
  border-radius: 8px;
  padding-left: 24px;
  padding-right: 24px;
`;
export const BestContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ContentImgWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font: ${theme.font.H3Bold};
`;
export const ContentInfo = styled.div`
  color: ${theme.color.gray500};
  font: ${theme.font.H7Regular};
  display: flex;
  justify-content: space-between;
`;

export const NicknameLike = styled.div`
  display: flex;

  gap: 8px;
`;
//articles
export const ArticleCardWrapper = styled.div`
  width: 100%;
  height: 138px;
  background-color: ${theme.color.backgroundLightGray};
  padding-left: 24px;
  padding-right: 24px;
  border-bottom: 1px solid ${theme.color.gray200};
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 114px;
`;
