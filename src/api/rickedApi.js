export async function fetchCharacter() {
  const response = await fetch(`https://rickandmortyapi.com/api/character`);
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
