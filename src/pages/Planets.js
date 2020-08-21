import React, { useState } from "react";
import AppHeader from "../components/main/AppHeader";
import InputPlanets from "../components/main/InputPlanets";
import AppMain from "../components/main/AppMain";
import List from "../components/main/List";
import { fetchLocations, fetchLocationName } from "../api/rickedApi";
import LoadingScreen from "../components/loading/Loading";
import { useQuery } from "react-query";
import PlanetList from "../components/main/PlanetList";

function Planets(props) {
  const [locations, setLocation] = useState(null);
  const [query, setQuery] = useState("");

  const { data, status } = useQuery("planets", fetchLocations);

  console.log(data);

  let timeOutId;

  function handleChange(input) {
    setQuery(input);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(async () => {
      const results = await fetchLocationName(query);
      setLocation(results);
    }, 300);
  }
  console.log(locations);
  return (
    <>
      <AppHeader>
        <h1>Planets</h1>
        <InputPlanets
          value={query}
          handleChange={(value) => handleChange(value)}
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

export default Planets;
