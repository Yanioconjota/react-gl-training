import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { ErrorScreen } from './ErrorScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

//la version 6 cambió el Switch por el Routes, y component por element.
/*
<Switch>
  <Route path="/about" component={AboutScreen}/>
</Switch>

<Routes>
  <Route path="/about" element={<AboutScreen/>} />
</Routes>
*/

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/about" element={<AboutScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </div>
    </Router>
  );
};
