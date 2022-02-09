import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({publisher}) => {

  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map(hero => (
        <HeroCard
          key={hero.id}
          //Desesctructuramos todas las propiedades que vienen en el hero para no mandarlas una por una
          {...hero}>{hero.superhero}</HeroCard>
      ))}
    </div>
  );
};

export default HeroList;
