import axios from "axios";


export const getData = async (page) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  
  const resp = await axios.get(url);
  const { data } = resp;
  const { results } = data;
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
