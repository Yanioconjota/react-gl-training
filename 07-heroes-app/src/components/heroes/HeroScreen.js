import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();

  const navigate = useNavigate();

  //Agregamos el hook useMemo para que el método getHeroById se dispare únicamente cuando cambie el heroId. useMemo recibe un callback que regresa un valor que es el que va a memorizar y luegos las dependencias que van a hacer que se vuelva a memorizar el valor cuando cambia
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

  const imagePath = `/assets/img/${heroId}.jpg`;

  const handleReturn = () => {
    //-1 vuelve a la pantalla anterior
    navigate(-1);
  };

  return (
    <div className="row">
      <div className="col-4">
        <img
          src={imagePath}
          alt={id}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <ul className="list-group animate__animated animate__fadeInDown">
          <li className="list-group-item">
            <h3>{superhero}</h3>
          </li>
          <li className="list-group-item">
            <strong>Name: </strong>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <strong>First appearance: </strong>
            {first_appearance}
          </li>
          <li className="list-group-item">
            <strong>Publisher: </strong>
            {publisher}
          </li>
          {alter_ego !== characters && (
            <li className="list-group-item">
              <strong>Portrayed by: </strong>
              {characters}
            </li>
          )}
        </ul>
        <button
          className="mt-3 btn btn-outline-info animate__animated animate__fadeInRight"
          onClick={handleReturn}
        >
          Return
        </button>
      </div>
    </div>
  );
};
