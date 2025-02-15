import styled from "styled-components";
import theme from "../../style/theme";
//
export const ProductInfoWrapper = styled.div`
  display: flex;
  gap: 24px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${theme.color.gray200};
`;

export const ProductImg = styled.img`
  width: 486px;
  border-radius: 16px;
  aspect-ratio: 1/1;
`;
export const InfoProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 62px;
`;
export const InfoTagWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TitleEditBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${theme.color.gray200};
`;
export const TitlePriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ProductTitle = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
`;

export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 40px;
  line-height: 47.73px;
`;

export const DesTitleContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const DescriptionTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: ${theme.color.gray600}; //4b5563
`;

export const ProductContent = styled.div`
  overflow-y: scroll;
  height: 104px;
`;
export const ProfileFavorite = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const ProfileImg = styled.img`
  width: 40px;
  aspect-ratio: 1/1;
`;
export const NickNameDate = styled.div`
  display: flex;
`;
export const NickName = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.color.gray600}; //#4B5563
`;
export const CreatedAt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.color.gray400};
`;
