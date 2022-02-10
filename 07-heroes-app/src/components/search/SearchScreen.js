import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import HeroCard from "../heroes/HeroCard";

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  //usamos un custom hook, handleInput change le pasa el valor al handleSearch
  const [formValues, handleInputChange, resetForm] = useForm({
    searchText: ''
  });

  const { searchText } = formValues;

  const heroesFiltered = getHeroesByName('Algo');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
    //navegamos a esta misma pantalla pero pasándo como params el valor de search text
    navigate(`?q=${ searchText }`);
  };

  return (
    <>
      <h1>Hero Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <div className="h4">Buscar</div>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Hero name"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-primary btn-block w-100 mt-3"
            >
              Buscar
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          <div className="row">
            {heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero}
              customClass="col-12 col-md-4" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
