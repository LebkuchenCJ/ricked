import React from "react";
import searchIconSrc from "../../assets/search-24px.svg";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #a2ce47;
  border-radius: 50px;
  display: flex;
  justify-content: space-between;

  > button {
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
  }

  > input {
    color: #000;
    background-color: rgba(162, 206, 71, 0.2);
    border-style: none;
    margin-left: 5px;
    width: 100%;
  }
`;

function Input({ query, handleChange }) {
  return (
    <Container>
      <input
        value={query}
        onChange={(event) => handleChange(event.target.value)}
        placeholder="Search"
        type="texts"
      />
      <button>
        <img src={searchIconSrc} alt="Search Icon" />
      </button>
    </Container>
  );
}

export default Input;
