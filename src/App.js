import React, { useEffect, useState } from "react";
import "./components/main/Input.css";
import Episodes from "./components/main/Episodes";
import Home from "./components/main/Home";
//import Input from "./components/main/Input";
import List from "./components/main/List";
import ListItem from "./components/main/ListItem";
import ListItemImg from "./components/main/ListItemImg";
import ListItemText from "./components/main/ListItemText";
import Menu from "./components/main/Menu";
import Planets from "./components/main/Planets";
import { fetchCharacter, fetchCharacterName } from "./api/rickedApi";
import ListItemPlanet from "./components/main/ListItemPlanet";
import LoadingScreen from "./components/loading/Loading";
import searchIconSrc from "./assets/search-24px.svg";
import AppHeader from "./components/main/AppHeader";
import AppMain from "./components/main/AppMain";
import AppFooter from "./components/main/AppFooter";
import styled from "@emotion/styled";

const Container = styled.div`
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    border-radius: 5px;
  }

  @font-face {
    font-family: "schwifty";
    src: url("../src/assets/get_schwifty.ttf");
  }

  height: 100vh;
  width: 60vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background-color: #35c9dd;
  color: #e5e5e5;
  margin: 0 auto;
  border: solid 5px #02afc5;
  border-radius: 15px;

  @media only screen and (max-width: 600px) {
    .app {
      width: 100vw;
      height: 100vh;
    }
  }
`;

function App() {
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
    <Container className="app">
      <AppHeader>
        <h1>GET RICKED</h1>
        <div className="searchElement">
          <input
            value={query}
            onChange={(event) => handleChange(event.target.value)}
            className="searchElement__input"
            placeholder="Search"
            type="texts"
          />
          <button>
            <img src={searchIconSrc} alt="Search Icon" />
          </button>
        </div>
        {/* <Input value={query} onChange={handleChange} /> */}
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
      <AppFooter>
        <Menu>
          <Home></Home>
          <Planets></Planets>
          <Episodes></Episodes>
        </Menu>
      </AppFooter>
    </Container>
  );
}

export default App;
