import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";

//gracias al midleware thunk-redux tenemos acceso al dispatch dentro del return
export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch( err => {
        console.log(err);
        dispatch(finishLoading());
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( async ({ user }) => {
        //update profile agrega el displayName, ya que este solo se crea cuando nos registramos con google o cualquier red social
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
         dispatch(finishLoading());
      })
      .catch( err => {
        console.log(err);
        dispatch(finishLoading());
      });
  }
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  }
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  }
});