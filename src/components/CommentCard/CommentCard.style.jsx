import styled from "styled-components";
// import theme from "../../style/theme";

export const CommentWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
`;
export const CommentFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Content = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
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
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`;
export const Date = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #9ca3af;
`;
