import React from "react";
import styled from "@emotion/styled";

const Container = styled.a`
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  text-decoration: none;
  align-items: center;
  margin: 0 5px;

  > img {
    width: 60px;
    height: 60px;
    margin-right: 5px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  span {
    font-weight: bolder;
  }
  > p {
    display: flex;
    flex-direction: column;
    text-align: right;
  }
  > h4 {
    flex-grow: 2;
  }
`;

export default function ListItem({ href, children }) {
  return <Container href={href}>{children}</Container>;
}
