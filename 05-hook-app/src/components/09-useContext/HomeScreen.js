import React, { useContext } from "react";
import { UserContext } from './UserContext';

export const HomeScreen = () => {

  const { user } = useContext(UserContext);
  console.log({ user });

  return (
    <>
      <h1>Home screen</h1>
      <hr />
      <pre className="Code">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
