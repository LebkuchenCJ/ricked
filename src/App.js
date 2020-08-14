import React, { useEffect } from "react";
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
/* import { fetchCharacter } from "./api/rickedApi"; */

function App() {
  const rick = {
    name: "Rick Sanchez",
    id: 1,
    planet: "Earth",
    href: "none",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  const characters = [rick];

  return (
    <div className="app">
      <header className="app__header">
        <h1>Get Ricked</h1>
        <Input />
      </header>
      <main className="app__main">
        <List>
          {characters?.map((character) => {
            return (
              <ListItem href={character.href} key={character.id}>
                <ListItemImg src={character.img} />
                <ListItemText
                  primary={character.name}
                  secondery={character.planet}
                />
              </ListItem>
            );
          })}
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
