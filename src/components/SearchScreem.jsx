import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import queryString from "query-string";

import { useForm } from "../hooks/useForm";
import { getHeroByName } from "../helper/getHeroByName";
import HeroCard from "./HeroCard";

export const SearchScreem = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;
  const heroFilted = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <div className="row">
        <div className="col-5">
          <h3 className="mt-2">Search</h3>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              autoComplete="off"
              name="searchText"
              placeholder="buscar"
              className="form-control"
              value={searchText}
              onChange={handleInputChange}
            />

            <button className="btn btn-outline-primary mt-1" type="submit">
              Buscar...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h3 className="mt-2">Result</h3>
          <hr />

          {q === "" 
            ? (<div className="alert alert-info">Busca un héroe</div>) 
            : (heroFilted.length === 0 
              && (
                <div className="alert alert-danger">
                  No se encuentra resultados relacionados con {q}
                </div>
            )
          )}

          {heroFilted.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchScreem;
