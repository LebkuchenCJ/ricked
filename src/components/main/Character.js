import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    border: solid 2px #fff;
    width: 50%;
  }
  > h2 {
    margin-bottom: 0;
  }
  > div {
    margin-top: 5px;
  }
`;

export default function Character({ person }) {
  return (
    <>
      <Container>
        <img src={person.image} alt={person.name} />
        <h2>{person.name}</h2>
        <span>(Random Character)</span>
        <div>
          <p>
            Stauts: <span>{person.status}</span>{" "}
          </p>
          <p>
            Species: <span>{person.species}</span>{" "}
          </p>
          <p>
            Gender: <span>{person.gender}</span>{" "}
          </p>
          <p>
            Origin: <span>{person.origin.name}</span>{" "}
          </p>
        </div>
      </Container>
    </>
  );
}
