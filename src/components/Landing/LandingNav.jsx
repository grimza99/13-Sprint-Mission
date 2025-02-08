import Logo_pandaMarketText from "../../assets/root_img/Logo_PandaMarketText.svg";
import useWindowSize from "../../Hooks/useWindowSize";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { Contents, Logo } from "./NavStyle.jsx";

//
function LandingNav() {
  const device = useWindowSize();
  return (
    <Contents>
      <Link to="./">
        <Logo src={Logo_pandaMarketText} alt="판다로고" />
      </Link>

      <Link to="./login">
        <Button>로그인</Button>
      </Link>
    </Contents>
  );
}

export default LandingNav;
