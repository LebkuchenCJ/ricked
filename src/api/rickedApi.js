export async function fetchCharacter() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
  if (!response.ok) {
    throw new Error(response);
  }
  const result = await response.json();

  const characters = result.results.map((character) => ({
    name: character.name,
    id: character.id,
    planet: character.origin.name,
    status: character.status,
    img: character.image,
    href: `#${character.name}`,
  }));

  return characters;
}
export async function fetchCharacterName(query) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${query}`
  );
  if (!response.ok) {
    throw new Error("Character doesn´t exist");
  }
  const result = await response.json();

  const characters = result.results.map((character) => ({
    name: character.name,
    id: character.id,
    planet: character.origin.name,
    status: character.status,
    img: character.image,
    href: `#${character.name}`,
  }));

  return characters;
}
