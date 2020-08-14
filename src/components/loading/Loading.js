import React from "react";
import "./Loading.css";
import portalSrc from "../../assets/portal.gif";

function LoadingScreen() {
  return (
    <div className="portalScreen">
      <img src={portalSrc} alt="Loading Screen" />
      <span>Loading...</span>
    </div>
  );
}

export default LoadingScreen;
