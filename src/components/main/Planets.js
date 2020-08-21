import React from "react";
import planetSrc from "../../assets/saturn.svg";

export default function Planets(href, alt) {
  return (
    <>
      <img src={planetSrc} alt="Planet Icon" />
      <span>Planets</span>
    </>
  );
}
