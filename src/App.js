import { Outlet } from "react-router-dom";
import React from "react";
import Nav from "./common/Nav";
import styled from "styled-components";

const Contents = styled.div`
  width: 100%;
  margin: 70px auto;
`;
function App() {
  return (
    <div>
      <Nav></Nav>
      <Contents>
        <Outlet />
      </Contents>
    </div>
  );
}

export default App;
