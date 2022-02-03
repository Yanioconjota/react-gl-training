import React, { useContext } from 'react';
import { UserContext } from "./UserContext";

export const AboutScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const handleClick = () => setUser({});
  
  return (
    <>
      <h1>About screen</h1>
      <hr />
      <pre className="Code mb-3">{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-secondary"
        onClick={handleClick}>Logout</button>
    </>
  );
};
