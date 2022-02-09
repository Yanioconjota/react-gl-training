import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego
}) => {

  const imagePath = `./assets/img/${id}.jpg`;

  return (
    <div className="col-6 col-md-3 col-lg-2">
      <div className="card">
        <div className="row no-gutters">
          <img src={imagePath} className="card-img-top" alt={superhero} />
          <div className="card-body px-4">
            <h2 className="card-title">{superhero}</h2>
            <p>
              {publisher}
            </p>
            <Link className="btn w-100 mt-3 btn-info" to={`/hero/${id}`}>
              Mas info...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
