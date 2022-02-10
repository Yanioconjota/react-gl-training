import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import HeroCard from "../heroes/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  //desestructuramos { q } porque es el primer argumento que viene en la query y le asignamos un valor por defecto para que no rompa, q va a ser el valor de searInput que le pasamos a la query
  const { q = "" } = queryString.parse(location.search);

  //usamos un custom hook, handleInput change le pasa el valor al handleSearch
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    //console.log(searchText);
    //navegamos a esta misma pantalla pero pasándo como params el valor de search text
    navigate(`?q=${searchText}`);
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
        <div className="col-7 search-hero">
          <h4>Resultados</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info animate__animated animate__fadeInRight">
              Busca un héroe
            </div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger animate__animated animate__fadeInRight">
                No se encotraron heroes: {q}
              </div>
            )
          )}

          {
            <div className="row">
              {heroesFiltered.map((hero) => (
                <HeroCard
                  key={hero.id}
                  {...hero}
                  customClass="col-12 col-md-4 animate__animated animate__fadeInRight"
                />
              ))}
            </div>
          }
        </div>
      </div>
    </>
  );
};
