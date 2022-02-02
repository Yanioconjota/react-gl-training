import React from 'react';
import { Link, NavLink } from "react-router-dom";

const routes = [
  { path: "/", name: "Home" },
  { path: "/login", name: "Login" },
  { path: "/about", name: "About" },
];

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <span className="navbar-brand">
        <Link className="nav-link" to="/">
          Use Context App
        </Link>
      </span>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {routes.map((route) => (
            <li className="nav-item" key={route.name}>
              <NavLink
                activeclassname="active"
                className="nav-link" to={route.path}>
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};