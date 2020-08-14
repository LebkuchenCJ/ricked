import React from "react";
import episodesSrc from "../../assets/film.svg";

function Episodes(href, alt) {
  return (
    <a href={href} alt={alt}>
      <img src={episodesSrc} alt="Episode Icon" />
      <span>Episodes</span>
    </a>
  );
}
export default Episodes;
