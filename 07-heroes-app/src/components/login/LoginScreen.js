import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { types } from "../../types/types";
import { AuthContext } from '../../auth/authContext';

export const LoginScreen = () => {

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Homero Thompson'
      },
    };

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    //como 2 argumento recibe opciones, donde replace reemplaza esta ruta para no poder volver con el go back del browser
    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-xs-12">
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
