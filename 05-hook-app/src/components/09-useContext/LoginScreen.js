import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const loggedUser = {
    id: 666,
    name: 'Homero',
    lastname: 'Thompson',
    email: 'homerothompson@email.com'
  };

  return (
    <>
      <h1>Login screen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={()=> setUser(loggedUser)}>Login</button>
    </>
  );
};
