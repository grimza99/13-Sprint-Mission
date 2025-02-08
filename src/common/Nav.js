import { Link, NavLink } from "react-router-dom";
import LogoPandaMarket from "../assets/root_img/Logo_PandaMarketText.svg";
import myLogo from "../assets/myLogo.svg";
import styled from "styled-components";
import useWindowSize from "../Hooks/useWindowSize";
import textLogo from "../assets/textLogo.svg";

const PandaMarketLogo = styled.img`
  width: 153px;
  height: 51px;
  margin-left: 200px;
  cursor: pointer;
  margin-left: 200px;
  margin-left: ${({ $device }) => ($device === "desktop" ? "200px" : "15px")};
`;

const MobilePandaMarketLogo = styled.img`
  width: 81px;
  height: 27px;
  margin-left: 15px;
`;

const activeLink = ({ isActive, $device }) => {
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
const MyLogoButton = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${({ $device }) => ($device === "desktop" ? "200px" : "15px")};
`;

const NavArea = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
`;

const NavButtonLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ $device }) => ($device === "mobile" ? "8px" : "21px")};
`;
function Nav() {
  const device = useWindowSize();
  return (
    <div>
      <NavArea>
        <NavButtonLeft device={device}>
          {device === "mobile" && (
            <MobilePandaMarketLogo src={textLogo} alt="판다마켓" />
          )}
          {device !== "mobile" && (
            <PandaMarketLogo
              device={device}
              src={LogoPandaMarket}
              alt="판다마켓"
            />
          )}
          <div>
            <NavLink device={device} to="/docs" style={activeLink}>
              자유게시판
            </NavLink>
            <NavLink device={device} to="/items" style={activeLink}>
              중고마켓
            </NavLink>
          </div>
        </NavButtonLeft>
        <Link>
          <MyLogoButton device={device} src={myLogo} />
        </Link>
      </NavArea>
    </div>
  );
}

export default Nav;
