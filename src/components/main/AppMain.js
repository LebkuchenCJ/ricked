import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  color: #e5e5e5;
  display: flex;
  flex-direction: grid;
  place-content: center;
  overflow-y: scroll;
`;

function AppMain({ children }) {
  return <Container>{children}</Container>;
}

export default AppMain;
