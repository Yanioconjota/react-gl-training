import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { LoginScreen } from '../components/login/LoginScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/NavBar';

const routes = [
  { path: '/', component: <MarvelScreen/> },
  { path: '/marvel', component: <MarvelScreen/> },
  { path: '/dc', component: <DcScreen/> },
  { path: '/search', component: <SearchScreen/> },
  { path: '/login', component: <LoginScreen/> }
];

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-xs-12">
            <Routes>
              {
                routes.map(({path, component}) => (
                  <Route key={component} path={path} element={component} />
                ))
              }
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
