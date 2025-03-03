import styled from "styled-components";
import theme from "@/styles/theme";
export const CardWrapper = styled.div`
  width: 384px;
  height: 169px;
  border: none;
  background-color: ${theme.color.gray50};
  border-radius: 8px;
  padding-left: 24px;
  padding-right: 24px;
`;
export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ContentImgWrapper = styled.div`
  display: flex;
  gap: 8px;
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
