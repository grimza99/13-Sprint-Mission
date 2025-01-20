import { Link } from "react-router-dom";
import Logo from "../assets/root_img/textLogo.svg";
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
  margin-left: ${({ device }) => (device === "desktop" ? "200px" : "15px")};
`;

const MobilePandaMarketLogo = styled.img`
  width: 81px;
  height: 27px;
  margin-left: 15px;
`;
const Button = styled.button`
  width: 108 px;
  padding: 21px 15px 21px 15px;
  font-size: 18px;
  font-weight: 700;  gap: ${({ device }) =>
    device === "mobile" ? "8px" : "21px"}
  line-height: 26px;
  text-align: center;
  border: none;
  background-color: #ffffff;
`;

const MyLogoButton = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${({ device }) => (device === "desktop" ? "200px" : "15px")};
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
  gap: ${({ device }) => (device === "mobile" ? "8px" : "21px")};
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
            <PandaMarketLogo device={device} src={Logo} alt="판다마켓" />
          )}
          <div>
            <Button>자유게시판</Button>
            <Button>중고마켓</Button>
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
