import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import '../../assets/scss/UseContextApp.scss';
import { UserContext } from './UserContext';

const MainApp = () => {

  // const user = {
  //   id: 666,
  //   name: 'Homero',
  //   email: 'homerothompson@correo.com'
  // };

  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{
      user,
      setUser,
      temporal:666
    }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
