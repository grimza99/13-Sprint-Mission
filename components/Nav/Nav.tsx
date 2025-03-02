import Link from "next/link";
import pandaLogo from "../../public/assets/Logo/pandaLogo.svg";
import textLogo from "../../public/assets/Logo/textLogo.svg";
import myLogo from "../../public/assets/icons/default.profile.icon.svg";
import * as S from "./Nav.style";
import useWindowSize from "../../hooks/useWindowSize";
export default function Nav() {
  const device: string = useWindowSize();
  return (
    <div>
      <S.HeaderArea>
        <S.ContentsWrapper>
          <S.Contents>
            <S.NavContents>
              <S.LogoContainer>
                {device !== "mobile" && (
                  <S.PandaImg src={pandaLogo} alt="판다로고" />
                )}
                <S.Logo src={textLogo} alt="판다마켓" />
              </S.LogoContainer>

              <S.NavLinkWrapper>
                <Link href="/docs">자유게시판</Link>
                <Link href="/items">중고마켓</Link>
              </S.NavLinkWrapper>
            </S.NavContents>
            <Link href="/mypage">
              <S.MyLogoButton src={myLogo} alt="프로필 이미지" />
            </Link>
          </S.Contents>
        </S.ContentsWrapper>
      </S.HeaderArea>
    </div>
  );
}
