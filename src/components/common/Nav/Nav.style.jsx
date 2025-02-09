import styled from "styled-components";
//
export const PandaMarketLogo = styled.img`
  width: 153px;
  height: 51px;
  margin-left: 200px;
  cursor: pointer;
  margin-left: 200px;
  margin-left: ${({ $device }) => ($device === "desktop" ? "200px" : "15px")};
`;

export const MobilePandaMarketLogo = styled.img`
  width: 81px;
  height: 27px;
  margin-left: 15px;
`;

export const activeLink = ({ isActive, $device }) => {
  return {
    color: isActive ? "#3692FF" : "#4b5563",
    width: "108px",
    padding: "21px 15px 21px 15px",
    fontSize: "18px",
    fontWeight: "700px",
    gap: $device === "mobile" ? "8px" : "21px",
    lineHeight: "26px",
    textAlign: "center",
    border: "none",
    backgroundColor: "#ffffff",
  };
};
export const MyLogoButton = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${({ $device }) => ($device === "desktop" ? "200px" : "15px")};
`;

export const NavArea = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  z-index: 50;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
`;

export const NavButtonLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $device }) => ($device === "mobile" ? "8px" : "21px")};
`;
export const Contents = styled.div``;
export const Logo = styled.img``;
export const NavLink = styled.link``;
