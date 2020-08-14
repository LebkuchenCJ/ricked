import React from "react";
import homeSrc from "../../assets/home.svg";

export default function Home(href, alt) {
  return (
    <a href={href} alt={alt}>
      <img src={homeSrc} alt="Home Icon" />
      <span>Home</span>
    </a>
  );
}
