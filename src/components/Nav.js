// import { Link } from "react-router-dom";
import Logo from "../assets/root_img/textLogo.svg";
import styled from "styled-components";

const PandaMarketLogo = styled.img`
  width: 153px;
  height: 51px;
  margin-left: 200px;
  cursor: pointer;
`;
function Nav() {
  return (
    <div>
      <div>
        <PandaMarketLogo src={Logo} alt="판다마켓" />

        <button>자유게시판</button>
        <button>중고마켓</button>

        <button>?</button>
      </div>
    </div>
  );
}

export default Nav;
