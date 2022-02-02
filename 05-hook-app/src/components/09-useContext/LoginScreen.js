import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
  console.log({ user });

  return (
    <>
      <h1>Login screen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={()=> setUser()}>Login</button>
    </>
  );
};
