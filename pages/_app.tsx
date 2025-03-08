import Nav from "../components/Layout/Nav/Nav";
import type { AppProps } from "next/app";
import * as S from "../components/Layout/Layout.style";
import "../styles/global.css";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="w-full mx-auto h-screen">
        <div className="max-w-[1200px] mx-auto h-screen mt-[70px]">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
