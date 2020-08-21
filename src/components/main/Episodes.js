import React from "react";
import episodesSrc from "../../assets/film.svg";

function Episodes(href, alt) {
  return (
    <>
      <img src={episodesSrc} alt="Episode Icon" />
      <span>Episodes</span>
    </>
  );
}
export default Episodes;
