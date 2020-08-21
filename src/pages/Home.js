import React from "react";
import AppHeader from "../components/main/AppHeader";
import AppMain from "../components/main/AppMain";
import List from "../components/main/List";
import { fetchRandomCharacter } from "../api/rickedApi";
import LoadingScreen from "../components/loading/Loading";
import { useQuery } from "react-query";
import Character from "../components/main/Character";

function Home() {
  const { data, status } = useQuery("character", fetchRandomCharacter);

  return (
    <>
      <AppHeader>
        <h1>GET RICKED</h1>
      </AppHeader>
      <AppMain>
        <List>
          {status === "loading" && <LoadingScreen />}
          {status === "error" && <div>Error</div>}
          {status === "success" && (
            <>
              <Character key={data.name} person={data} />
            </>
          )}
        </List>
      </AppMain>
    </>
  );
}

export default Home;
