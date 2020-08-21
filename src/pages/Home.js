import React, { useEffect, useState } from "react";
import AppHeader from "../components/main/AppHeader";
import Input from "../components/main/Input";
import AppMain from "../components/main/AppMain";
import List from "../components/main/List";
import ListItem from "../components/main/ListItem";
import ListItemImg from "../components/main/ListItemImg";
import ListItemText from "../components/main/ListItemText";
import ListItemPlanet from "../components/main/ListItemPlanet";
import { fetchCharacter, fetchCharacterName } from "../api/rickedApi";
import LoadingScreen from "../components/loading/Loading";

function Home() {
  const [characters, setCharaters] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        setLoading(false);
        const characterIndex = await fetchCharacter();
        setCharaters(characterIndex);
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
      setCharaters(results);
    }, 300);
  }
  if (loading === false) {
    return <LoadingScreen />;
  }

  return (
    <>
      <AppHeader>
        <h1>GET RICKED</h1>
        <Input value={query} handleChange={(value) => handleChange(value)} />
      </AppHeader>
      <AppMain>
        <List>
          {characters?.map((character) => (
            <ListItem href={character.href} key={character.id}>
              <ListItemImg src={character.img} />
              <ListItemText primary={character.name} />
              <ListItemPlanet secondary={character.planet} />
            </ListItem>
          ))}
        </List>
      </AppMain>
    </>
  );
}

export default Home;
