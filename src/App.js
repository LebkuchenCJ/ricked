import React from "react";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Episodes from "./pages/Episodes";
import AppFooter from "./components/main/AppFooter";
import styled from "@emotion/styled";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Container = styled.div`
  height: 100vh;
  width: 60vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #35c9dd;
  color: #e5e5e5;
  margin: 0 auto;
  border: solid 5px #02afc5;
  border-radius: 15px;

  @media only screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Container className="app">
          <Switch>
            <Route path="/planets">
              <Planets />
            </Route>
            <Route path="/episodes">
              <Episodes />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <AppFooter />
        </Container>
      </Router>
    </>
  );
}

export default App;
