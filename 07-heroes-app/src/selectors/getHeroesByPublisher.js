import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

  heroes.sort((a, b) => {
    if (a.superhero < b.superhero) {
      return -1;
    }
    if (a.superhero > b.superhero) {
      return 1;
    }
    return 0;
  });
  
  const validPublishers = ['DC Comics', 'Marvel Comics', 'all'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  if (publisher === 'all') {
    return heroes;
  }
  
  return heroes.filter( hero => hero.publisher === publisher);
}