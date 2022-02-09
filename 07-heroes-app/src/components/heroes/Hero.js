import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {

  const { heroId } = useParams();

  //const [heroPath, setHeroPath] = useState('');

  const navigate = useNavigate();

  console.log(heroId);

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to='/'/>
  }

  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const imagePath = `/assets/img/${heroId}.jpg`;
  
  const handleReturn = () => {
    //-1 vuelve a la pantalla anterior
    navigate(-1);
  };

  return (
    <div className="row">
      <div className="col-4">
        <img src={imagePath} alt={id} className="img-thumbnail" />
      </div>
      <div className="col-8">
        <ul className="list-group">
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
          className="mt-3 btn btn-outline-info"
          onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
