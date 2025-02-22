import { Route, BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalStyle.js";
//
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import App from "./App.js";
import ItemsPage from "./pages/ItemsPage/ItemsPage.tsx";
import AddItem from "./pages/AddItem/AddItem.jsx";
import Product from "./pages/ProductPage/Product.jsx";
import Test from "./components/TestPage.jsx";
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
            <Route path="/items" element={<ItemsPage />} />
            <Route path="/items/:productId" element={<Product />} />
            <Route path="/additem" element={<AddItem />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Main;
