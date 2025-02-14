import { Route, BrowserRouter, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
//
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import App from "./App.js";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddItem from "./pages/AddItem/AddItem.jsx";
import Product from "./pages/ProductId/Product.jsx";
import Test from "./components/TestPage.jsx";
//
//
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Pretendard', sans-serif;
    font-display: swap;
    margin: 0; 
    padding: 0;
  }
  html {
  margin: 0; 
  padding: 0;
  }
  a {
    text-decoration: none; 
    color: #ffffff;
  }
  p{
    margin: 0px;
  }
`;
//
function Main() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<App />}>
            <Route path="/test" element={<Test />} />
            <Route path="/items" element={<HomePage />} />
            <Route path="/items/:productId" element={<Product />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Main;
