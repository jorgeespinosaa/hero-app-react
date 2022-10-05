import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../helper/getHeroById";
import { loadImage } from "../helper/loadImage";

/* import heroImage  from "/src/assets" */
/* const heroImage = require("./src/assets", true) */
/* const loadImage = new URL("../assets", import.meta.url).href */

export const HeroScreem = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  /* const imagePath = `/src/assets/${id}.jpg`; */
  /* const imagePath = getImageUrl(`/${id}.jpg`); */
  /* const imagePath = `${loadImage}/${id}.jpg`; */

  

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={loadImage(id)} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter ego: </b> {alter_ego}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>Publisher: </b> {publisher}{" "}
          </li>
          <li className="list-group-item">
            {" "}
            <b>First Appearance: </b>
            {first_appearance}{" "}
          </li>
        </ul>

        <h5 className="mt-3">Character</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
};

export default HeroScreem;
