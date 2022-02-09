import { Link } from "react-router-dom";

const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {

  const imagePath = `./assets/img/${id}.jpg`;

  return (
    <div className="col-12 col-md">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={imagePath} className="card-img" alt={superhero} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text"><strong>Name: </strong>{alter_ego}</p>
              {/* {
                (alter_ego !== characters) &&
                <p><strong>Portrayed by:</strong> {characters}</p>
              } */}
              {/* <p><strong>First appearance:</strong> {first_appearance}</p> */}
              <p><strong>Publisher:</strong> {publisher}</p>
              <Link className="text-info" to={`/hero/${id}`}>Mas info...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
