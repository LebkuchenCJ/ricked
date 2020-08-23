import React, { useState } from "react";
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
import { useQuery } from "react-query";

function Home() {
  const [characters, setCharaters] = useState(null);
  const [query, setQuery] = useState("");

  let { data, status } = useQuery("planets", fetchCharacter);

  let timeOutId;

  function handleChange(input) {
    setQuery(input);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(async () => {
      const results = await fetchCharacterName(query);
      setCharaters(results);
    }, 300);
  }
  if (characters != null) {
    data = characters;
  }
  return (
    <>
      <AppHeader>
        <h1>Characters</h1>
        <Input value={query} handleChange={(value) => handleChange(value)} />
      </AppHeader>
      <AppMain>
        <List>
          {status === "loading" && <LoadingScreen />}
          {status === "error" && <div>Error</div>}
          {status === "success" && (
            <>
              {data?.map((character) => (
                <ListItem href={character.href} key={character.id}>
                  <ListItemImg src={character.img} />
                  <ListItemText primary={character.name} />
                  <ListItemPlanet secondary={character.planet} />
                </ListItem>
              ))}
            </>
          )}
        </List>
      </AppMain>
    </>
  );
}

export default Home;
