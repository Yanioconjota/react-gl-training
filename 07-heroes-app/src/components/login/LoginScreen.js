import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    //como 2 argumento recibe opciones, donde replace reemplaza esta ruta para no poder volver con el go back del browser
    navigate('/marvel', {
      replace: true
    });
  };

  return (
    <div class="container-fluid mt-3">
      <div class="row">
        <div class="col-xs-12">
          <h1>Login</h1>
          <hr />
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
