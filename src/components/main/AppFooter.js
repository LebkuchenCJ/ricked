import React from "react";
import styled from "@emotion/styled";
import Menu from "./Menu";
import Planets from "./Planets";
import Characters from "./Characters";
import Episodes from "./Episodes";
import Home from "./Home";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <Home />
        </Link>
        <Link to="/characters">
          <Characters />
        </Link>
        <Link to="/planets">
          <Planets />
        </Link>
        <Link to="/episodes">
          <Episodes />
        </Link>
      </Menu>
    </Container>
  );
}

export default AppFooter;
