import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
