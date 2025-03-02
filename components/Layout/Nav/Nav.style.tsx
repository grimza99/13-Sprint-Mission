import styled from "styled-components";
import theme from "../../../styles/theme";
import Image from "next/image";
//

export const HeaderArea = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 70px;
  background-color: ${theme.color.white};
  padding: 10px 200px;
  z-index: 50;
  @media (max-width: 375px) {
    padding: 15px 15px;
  }
  @media (min-width: 376px) and (max-width: 768px) {
    padding: 10px 24px;
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Contents = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavContents = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  flex-direction: row;
  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 9px;
`;
export const PandaImg = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const Logo = styled(Image)`
  width: 103px;
  height: 51px;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 81px;
  }
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export const MyLogoButton = styled(Image)`
  width: 40px;
  height: 40px;
`;
