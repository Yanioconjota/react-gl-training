import axios from "axios";

export const getData = async () => {
  const resp = await axios.get("https://rickandmortyapi.com/api/character");
  const { data } = await resp;
  const { results } = await data;
  const characters = results.map(ch => ({
    id: ch.id,
    name: ch.name,
    image: ch.image,
    species: ch.species,
    origin: ch.origin.name,
    status: ch.status
  }));
  return characters;
};
