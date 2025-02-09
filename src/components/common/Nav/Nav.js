import { Link, NavLink } from "react-router-dom";
import LogoPandaMarket from "../../../assets/root_img/Logo_PandaMarketText.svg";
import myLogo from "../../../assets/myLogo.svg";
import * as S from "./Nav.style.jsx";
import useWindowSize from "../../../hooks/useWindowSize";
import textLogo from "../../../assets/textLogo.svg";

function Nav() {
  const device = useWindowSize();
  return (
    <div>
      <S.NavArea>
        <S.NavButtonLeft device={device}>
          {device === "mobile" && (
            <S.MobilePandaMarketLogo src={textLogo} alt="판다마켓" />
          )}
          {device !== "mobile" && (
            <S.PandaMarketLogo
              device={device}
              src={LogoPandaMarket}
              alt="판다마켓"
            />
          )}
          <div>
            <NavLink device={device} to="/docs" style={S.activeLink}>
              자유게시판
            </NavLink>
            <NavLink device={device} to="/items" style={S.activeLink}>
              중고마켓
            </NavLink>
          </div>
        </S.NavButtonLeft>
        <Link>
          <S.MyLogoButton device={device} src={myLogo} />
        </Link>
      </S.NavArea>
    </div>
  );
}

export default Nav;
