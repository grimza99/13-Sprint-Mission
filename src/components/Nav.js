import { Link } from "react-router-dom";
import Logo from "../assets/root_img/textLogo.svg";
import myLogo from "../assets/myLogo.svg";
import styled from "styled-components";

const PandaMarketLogo = styled.img`
  width: 153px;
  height: 51px;
  margin-left: 200px;
  cursor: pointer;
  margin-left: 200px;
`;

const Button = styled.button`
  display: flex
  width: 108 px;
  padding: 21px 15px 21px 15px;
  gap: 10px;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;
  border: none;
  background-color: #FFFFFF;
`;

const MyLogoButton = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 200px;
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
  gap: 32px;
  align-items: center;
`;
function Nav() {
  return (
    <div>
      <NavArea>
        <NavButtonLeft>
          <PandaMarketLogo src={Logo} alt="판다마켓" />
          <div>
            <Button>자유게시판</Button>
            <Button>중고마켓</Button>
          </div>
        </NavButtonLeft>
        <Link>
          <MyLogoButton src={myLogo} />
        </Link>
      </NavArea>
    </div>
  );
}

export default Nav;
