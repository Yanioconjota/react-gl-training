import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  if (publisher === 'all') {
    return heroes;
  }
  
  return heroes.filter( hero => hero.publisher === publisher);
}