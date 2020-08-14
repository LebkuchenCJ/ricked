import React, { useEffect, useState } from "react";
import "./App.css";
import Episodes from "./components/main/Episodes";
import Home from "./components/main/Home";
import Input from "./components/main/Input";
import List from "./components/main/List";
import ListItem from "./components/main/ListItem";
import ListItemImg from "./components/main/ListItemImg";
import ListItemText from "./components/main/ListItemText";
import Menu from "./components/main/Menu";
import Planets from "./components/main/Planets";
import { fetchCharacter /* fetchCharacterName */ } from "./api/rickedApi";
import ListItemPlanet from "./components/main/ListItemPlanet";
import LoadingScreen from "./components/loading/Loading";

function App() {
  const [characters, setCharaters] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
      const characterIndex = await fetchCharacter();
      setCharaters(characterIndex);
      setLoading(true);
    }
    fetchData();
  }, []);

  /* let timeOutId;

  function handleChange(input) {
    setQuery(input);
    clearTimeout(timeOutId);
    timeOutId = setTimeout(async () => {
      const results = await fetchCharacterName(query);
      setCharaters(results);
    }, 300);
  } */

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div className="app">
      <header className="app__header">
        <h1>Get Ricked</h1>
        {/* <input
        ></input> */}
        <Input /* value={query} onChange={handleChange} */ />
      </header>
      <main className="app__main">
        <List>
          {characters?.map((character) => (
            <ListItem href={character.href} key={character.id}>
              <ListItemImg src={character.img} />
              <ListItemText primary={character.name} />
              <ListItemPlanet secondary={character.planet} />
            </ListItem>
          ))}
        </List>
      </main>
      <footer className="app__footer">
        <Menu>
          <Home></Home>
          <Planets></Planets>
          <Episodes></Episodes>
        </Menu>
      </footer>
    </div>
  );
}

export default App;
