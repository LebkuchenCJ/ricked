import React from "react";
import episodeSrc from "../../assets/film.svg";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  text-decoration: none;
  align-items: center;
  margin: 0 5px;
  > img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }

  h4 {
    margin-bottom: 0;
  }
  div:nth-of-type(1) {
    flex-grow: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
  }
`;

function EpisodeList({ episode }) {
  return (
    <Container>
      <img src={episodeSrc} alt="Episode Icon" />
      <div>
        <h4>{episode.name}</h4>
        <p> {episode.episode} </p>
      </div>
      <div>
        <p>Air date:</p>
        <span>{episode.air_date}</span>
      </div>
    </Container>
  );
}

export default EpisodeList;
