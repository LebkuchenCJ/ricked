import React from "react";
import portalSrc from "../../assets/portal.gif";
import mortySrc from "../../assets/morty.png";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "schwifty", sans-serif;
  -webkit-text-stroke: 0.5px #000;
  text-shadow: -2px 0 rgb(162, 206, 71), 0 2px rgb(162, 206, 71),
    2px 0 rgb(162, 206, 71), 0 -2px rgb(162, 206, 71);
  background-image: linear-gradient(
    to right top,
    #02afc5,
    #49c0d2,
    #6dd1e0,
    #8ce2ee,
    #a9f3fd
  );
  font-weight: bolder;
  font-size: 2rem;
  position: relative;

  img:nth-of-type(2) {
    animation: loadingImg 2s;
    position: absolute;
    width: 15%;
  }

  @keyframes loadingImg {
    from {
      width: 1vw;
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

function LoadingScreen() {
  return (
    <Container>
      <img src={portalSrc} alt="Loading Screen" />
      <img src={mortySrc} alt="Loading Screen" />
      <span>Loading...</span>
    </Container>
  );
}

export default LoadingScreen;
