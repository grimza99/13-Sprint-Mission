import useWindowSize from "../Hooks/useWindowSize";
import App from "../App";
import HomePage from "../pages/HomePage";
import AddItem from "../pages/AddItem";
//
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components"; //import

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
          <Route path="/" element={<App />}>
            <Route path="/items" element={<HomePage device={deviceType} />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Main;
