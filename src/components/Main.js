import App from "../App";
import HomePage from "../pages/HomePage";
import AddItem from "../pages/AddItem";
//
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

//
function Main() {
  const [deviceType, setDeviceType] = useState("desktop");

  const updateDeviceType = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      setDeviceType("mobile");
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  };

  useEffect(() => {
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

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
