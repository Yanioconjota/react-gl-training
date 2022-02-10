import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({publisher}) => {
  //Agregamos el hook useMemo para que el método getHeroesByPublisher se dispare únicamente cuando cambie el publisher. useMemo recibe un callback que regresa un valor que es el que va a memorizar y luegos las dependencias que van a hacer que se vuelva a memorizar el valor cuando cambia
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div
      className="row
                 rows-cols-1
                 row-cols-md-3 g-3
                 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          //Desesctructuramos todas las propiedades que vienen en el hero para no mandarlas una por una
          {...hero}
        >
          {hero.superhero}
        </HeroCard>
      ))}
    </div>
  );
};

export default HeroList;
