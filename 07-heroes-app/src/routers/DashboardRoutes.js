import { Routes, Route } from "react-router-dom";
import { Navbar } from '../components/ui/NavBar';
import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from "../components/heroes/HeroScreen";
import { AllHeroesScreen } from "../components/heroes/AllHeroesScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-xs-12">
            <Routes>
              <Route path="marvel" element={<MarvelScreen />} />
              <Route path="dc" element={<DcScreen />} />
              <Route path="all" element={<AllHeroesScreen />} />
              <Route path="search" element={<SearchScreen />} />
              <Route path="hero/:heroId" element={<HeroScreen />} />
              <Route path="/" element={<MarvelScreen />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardRoutes;
