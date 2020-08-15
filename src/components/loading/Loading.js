import React from "react";
import "./Loading.css";
import portalSrc from "../../assets/portal.gif";
import mortySrc from "../../assets/morty.png";

function LoadingScreen() {
  return (
    <div className="portalScreen">
      <img src={portalSrc} alt="Loading Screen" />
      <img src={mortySrc} alt="Loading Screen" />
      <span>Loading...</span>
    </div>
  );
}

export default LoadingScreen;
