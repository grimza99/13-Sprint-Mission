import styled from "styled-components";
import theme from "../../style/theme";
//
export const Background = styled.div`
  width: 100%;
  @media (max-width: 375px) {
    padding: 16px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    padding: 24px;
  }
`;
export const Contents = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font: ${theme.font.H3Bold};
  @media (max-width: 375px) {
    width: 74px;
    height: 32px;
  }
`;
export const TitleInputDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 375px) {
    flex: 0 1 calc(50% - 10px);
  }
`;

export const InputDiv = styled.div`
  display: flex;
  gap: 12px;
  height: auto;
`;
export const SearchBtnContainer = styled.div`
  width: 133px;
  height: 42px;
  font: ${theme.font.H5Bold};
  @media (max-width: 375px) {
  }
`;

export const InputContainer = styled.div`
  width: ${({ device }) =>
    device === "desktop" ? "325px" : device === "tablet" ? "242px" : "288px"};
  text-align: left;
  margin-left: ${({ device }) =>
    device === "desktop" ? "500px" : device === "tablet" ? "80px" : "0px"};
  @media (max-width: 375px) {
    order: 1;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MobileTitleBtn = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
