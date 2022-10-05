import { useMemo } from "react";
import { getHeroByPublisher } from "../helper/getHeroByPublisher";
import HeroCard from "./HeroCard";

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher),[publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard {...hero} key={hero.id} />
      ))}
    </div>
  );
};

export default HeroList;
