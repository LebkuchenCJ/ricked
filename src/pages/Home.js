import React from "react";
import AppHeader from "../components/main/AppHeader";
import AppMain from "../components/main/AppMain";
import List from "../components/main/List";
import { fetchCharacter, fetchCharacterName } from "../api/rickedApi";
import LoadingScreen from "../components/loading/Loading";

function Home() {
  return (
    <>
      <AppHeader>
        <h1>GET RICKED</h1>
      </AppHeader>
      <AppMain>
        <List></List>
      </AppMain>
    </>
  );
}

export default Home;
