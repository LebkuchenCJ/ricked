import React from "react";
import styled from "@emotion/styled";

const Nav = styled.nav`
  width: 100%;
`;

function List({ children }) {
  return <Nav className="list">{children}</Nav>;
}
export default List;
