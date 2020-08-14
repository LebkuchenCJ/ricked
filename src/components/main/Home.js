import React from "react";

export default function Home(href, alt) {
  return (
    <a href={href} alt={alt}>
      <img src="x" alt="Home Icon" />
      <span>Home</span>
    </a>
  );
}
