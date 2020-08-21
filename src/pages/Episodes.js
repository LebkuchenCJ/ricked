import React from "react";
import AppHeader from "../components/main/AppHeader";
import InputPlanets from "../components/main/InputPlanets";
import AppMain from "../components/main/AppMain";
import List from "../components/main/List";
import LoadingScreen from "../components/loading/Loading";
import PlanetList from "../components/main/PlanetList";
import { useQuery } from "react-query";
import { fetchEpisodes } from "../api/rickedApi";

function Episodes(props) {
  const { data, status } = useQuery("episodes", fetchEpisodes);

  console.log(data);

  return (
    <>
      <AppHeader>
        <h1>Planets</h1>
        <InputPlanets
        /*  value={query}
          handleChange={(value) => handleChange(value)} */
        />
      </AppHeader>
      <AppMain>
        <List>
          {status === "loading" && <LoadingScreen />}
          {status === "error" && <div>Error</div>}
          {status === "success" && (
            <>
              {data.map((location) => (
                <PlanetList key={location.name} planet={location} />
              ))}
            </>
          )}
        </List>
      </AppMain>
    </>
  );
}

export default Episodes;
