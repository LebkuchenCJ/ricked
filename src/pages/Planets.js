import React, { useEffect, useState } from "react";
import AppHeader from "../components/main/AppHeader";
import Input from "../components/main/Input";
import AppMain from "../components/main/AppMain";
import List from "../components/main/List";
import ListItem from "../components/main/ListItem";
import ListItemImg from "../components/main/ListItemImg";
import ListItemType from "../components/main/ListItemType";
import { fetchLocations, fetchCharacterName } from "../api/rickedApi";
import LoadingScreen from "../components/loading/Loading";
import ListItemDimension from "../components/main/ListItemDimension";
import { useQuery } from "react-query";
import PlanetList from "../components/main/PlanetList";

function Planets(props) {
  //const [locations, setLocation] = useState(null);
  //const [query, setQuery] = useState("");
  //const [loading, setLoading] = useState(false);

  const { data, status } = useQuery("planets", fetchLocations);

  console.log(data);

  //let timeOutId;

  /*  function handleChange(input) {
    setQuery(input);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(async () => {
      const results = await fetchCharacterName(query);
      setLocation(results);
    }, 300);
  } */

  return (
    <>
      <AppHeader>
        <h1>Planets</h1>
        <Input /* value={query} handleChange={(value) => handleChange(value)} */
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
