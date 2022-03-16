import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from "../firebase/firebase-config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';

export const AppRouter = () => {

  const dispatch = useDispatch();

  //Cheking es un flag que depende de la respuesta de firebase para mostrar o no el contenido de la app
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    //Es un observable para ,irar los cambios del state
    firebase.auth().onAuthStateChanged((user) => {
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
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRouter}></Route>
        <Route path="/" exact component={JournalScreen}></Route>
      </Switch>
    </Router>
  );
}
