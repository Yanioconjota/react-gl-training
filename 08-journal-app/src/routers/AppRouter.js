import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from "../firebase/firebase-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import PublicRoute from './PublicRoute';
import PrivateRoute from "./PrivateRoute";

export const AppRouter = () => {

  const dispatch = useDispatch();

  //Cheking es un flag que depende de la respuesta de firebase para mostrar o no el contenido de la app
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    //Es un observable para ,irar los cambios del state
    const auth = getAuth();
    onAuthStateChanged(auth,(user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);
  
  if (checking) {
    return (
      <div className="loader-wrapper">
        <div id="loader" className="loader"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PublicRoute isAuth={isLoggedIn}>
              <AuthRouter />
            </PublicRoute>
          }
        />

        <Route
          path="/"
          element={
            <PrivateRoute isAuth={isLoggedIn}>
              <JournalScreen />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
