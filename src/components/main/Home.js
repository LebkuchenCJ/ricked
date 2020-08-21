import React from "react";
import homeSrc from "../../assets/home.svg";

export default function Home(href, alt) {
  return (
    <>
      <img src={homeSrc} alt="Home Icon" />
      <span>Home</span>
    </>
  );
}
