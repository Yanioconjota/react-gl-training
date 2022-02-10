import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    //como 2 argumento recibe opciones, donde replace reemplaza esta ruta para no poder volver con el go back del browser
    navigate("/login", {
      replace: true,
    });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              activeclassname="active"
              className="nav-item nav-link"
              to="/marvel">
              Marvel
            </NavLink>
            <NavLink
              activeclassname="active"
              className="nav-item nav-link"
              to="/dc">
              DC
            </NavLink>
            <NavLink
              activeclassname="active"
              className="nav-item nav-link"
              to="/search">
              Buscar
            </NavLink>
          </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item nav-link text-info">
              <span>Homero</span>
            </li>
            <li className="nav-item nav-link"
              onClick={handleLogout}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
