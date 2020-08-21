import React from "react";
import styled from "@emotion/styled";
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #35c9dd;
    margin: 10px 0;
  }

  > a > img {
    max-width: 40px;
    max-height: 40px;
    object-fit: contain;
    margin-bottom: 5px;
  }
`;

export default function Menu({ children }) {
  return <Container>{children}</Container>;
}
