import React from "react";
import styled from "@emotion/styled";
import Menu from "./Menu";
import Planets from "./Planets";
import Episodes from "./Episodes";
import Home from "./Home";

const Container = styled.div`
  background-color: #000;
  display: grid;
  place-items: center;
  border-radius: 20px 20px 10px 10px;
`;

function AppFooter() {
  return (
    <Container>
      <Menu>
        <Home />
        <Planets />
        <Episodes />
      </Menu>
    </Container>
  );
}

export default AppFooter;
