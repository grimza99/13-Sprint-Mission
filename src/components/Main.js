import useWindowSize from "../Hooks/useWindowSize";
import App from "../App";
import HomePage from "../pages/HomePage";
import AddItem from "../pages/AddItem";
//
import { Route, BrowserRouter, Routes } from "react-router-dom";

//
function Main() {
  const deviceType = useWindowSize();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/items" element={<HomePage device={deviceType} />} />
          <Route path="/additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Main;
