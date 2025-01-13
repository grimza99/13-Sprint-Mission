import App from "../App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddItem from "../pages/AddItem";
//
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/items" element={<HomePage />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
