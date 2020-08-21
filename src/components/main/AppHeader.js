import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #000;
  color: #35c9dd;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-family: "schwifty", sans-serif;
  padding-bottom: 15px;
  border-radius: 10px 10px 20px 20px;
  > h1 {
    margin: 5px 0;
    -webkit-text-stroke: 0.5px #000;
    text-shadow: -2px 0 rgb(162, 206, 71), 0 2px rgb(162, 206, 71),
      2px 0 rgb(162, 206, 71), 0 -2px rgb(162, 206, 71);
  }
`;

function AppHeader({ children }) {
  return <Container>{children}</Container>;
}

export default AppHeader;
