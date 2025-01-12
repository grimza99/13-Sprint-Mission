import App from "../App";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
//
function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/items" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
