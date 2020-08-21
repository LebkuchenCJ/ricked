import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #000;
  display: grid;
  place-items: center;
  border-radius: 20px 20px 10px 10px;
`;

function AppFooter({ children }) {
  return <Container>{children}</Container>;
}

export default AppFooter;
