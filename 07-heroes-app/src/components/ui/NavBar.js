import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {

  const handleLogout = () => {
    //por hacer
    console.log('logout');
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
