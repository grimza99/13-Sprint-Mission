import styled from "styled-components";
import theme from "../../style/theme";

export const CommentWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.gray200};
  padding-bottom: 12px;
`;
export const CommentFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Content = styled.p`
  font: ${theme.font.H7Regular};
`;
export const ProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const NickNameDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const NickName = styled.p`
  font: ${theme.font.H8};
`;
export const Date = styled.p`
  font: ${theme.font.H8};
  color: ${theme.color.gray400};
`;
