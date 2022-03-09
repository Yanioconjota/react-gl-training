import { Link } from "react-router-dom";

import { heroImages } from '../../helpers/heroImages';

const HeroCard = ({
  id,
  superhero,
  publisher,
  customClass = 'col-6 col-md-3 col-lg-2'
}) => {
  //const imagePath = `./assets/img/${id}.jpg`;
  
  return (
    <div
      className={`card ${customClass}`}
    >
      <div className="row no-gutters">
        <img className="card-img-top" alt={superhero}
             //src={imagePath}
              src={heroImages(`./${id}.jpg`)}/>
        <div className="card-body px-4">
          <h2 className="card-title">{superhero}</h2>
          <p>{publisher}</p>
          <Link className="btn w-100 mt-3 btn-info" to={`/hero/${id}`}>
            Mas info...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
