import { Routes, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar";

import DcScreem from "../components/DcScreem";
import MarvelScreem from "../components/MarvelScreem";
import SearchScreem from "../components/SearchScreem";
import HeroScreem from "../components/HeroScreem";



export const DashboardRoute = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          
          <Route path="marvel"    element={<MarvelScreem />} />
          <Route path="dc"        element={<DcScreem />} />
          
          <Route path="search"    element={<SearchScreem />} />
          <Route path="hero/:heroId"      element={<HeroScreem />} />
          
          <Route path="/"         element={<MarvelScreem />} />
          
        </Routes>
      </div>


    </>
  );
};
