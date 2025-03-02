import Nav from "../components/Layout/Nav/Nav";
import type { AppProps } from "next/app";
import * as S from "../components/Layout/Layout.style";
import "../styles/global.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <S.ContentWrapper>
        <Component {...pageProps} />
      </S.ContentWrapper>
    </>
  );
}
