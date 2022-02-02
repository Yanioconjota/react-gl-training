import React, { useContext } from "react";
import { UserContext } from './UserContext';

export const HomeScreen = () => {

  const { user } = useContext(UserContext);
  console.log({ user });

  return (
    <>
      <h1 className="d-flex justify-content-between align-items-center">
        <span>Home screen</span>
        {/* <small>Hola {name}!</small>   */}
      </h1>
      <hr/>
      <pre className="Code">
        {JSON.stringify(user, null, 3)}
      </pre>
    </>
  );
};
