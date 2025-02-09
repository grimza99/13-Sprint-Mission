import useWindowSize from "../hooks/useWindowSize";
import App from "../App";
import HomePage from "../pages/HomePage";
import AddItem from "../pages/AddItem/AddItem.jsx";
//
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components"; //import
import LandingPage from "../pages/Landing/LandingPage";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
    font-display: swap;
  }
  img {
  border-radius: 16px;
  }
    a {
    text-decoration: none; 
    color: #ffffff;
  }
`;

//
function Main() {
  const deviceType = useWindowSize();
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<App />}>
            <Route path="/items" element={<HomePage device={deviceType} />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Main;
