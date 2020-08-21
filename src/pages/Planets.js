import React, { useEffect, useState } from "react";
import AppHeader from "../components/main/AppHeader";
import Input from "../components/main/Input";
import AppMain from "../components/main/AppMain";
import List from "../components/main/List";
import ListItem from "../components/main/ListItem";
import ListItemImg from "../components/main/ListItemImg";
import ListItemText from "../components/main/ListItemText";
import ListItemType from "../components/main/ListItemType";
import { fetchLocations, fetchCharacterName } from "../api/rickedApi";
import LoadingScreen from "../components/loading/Loading";
import ListItemDimension from "../components/main/ListItemDimension";

function Planets(props) {
  const [locations, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        setLoading(false);
        const locationIndex = await fetchLocations();
        setLocation(locationIndex);
        setLoading(true);
      }
      fetchData();
    }, 2000);
  }, []);

  let timeOutId;

  function handleChange(input) {
    setQuery(input);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(async () => {
      const results = await fetchCharacterName(query);
      setLocation(results);
    }, 300);
  }
  if (loading === false) {
    return <LoadingScreen />;
  }
  return (
    <>
      <AppHeader>
        <h1>Planets</h1>
        <Input value={query} handleChange={(value) => handleChange(value)} />
      </AppHeader>
      <AppMain>
        <List>
          {locations?.map((location) => (
            <ListItem href={location.href} key={location.id}>
              <ListItemImg />
              <ListItemText primary={location.name} />
              <ListItemDimension secondary={location.planet} />
              <ListItemType type={location.dimension} />
            </ListItem>
          ))}
        </List>
      </AppMain>
    </>
  );
}

export default Planets;
