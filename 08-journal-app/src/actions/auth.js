import { types } from "../types/types";
import { googleAuthProvider } from "../firebase/firebase-config";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile 
} from "firebase/auth";
import { finishLoading, startLoading } from "./ui";

//gracias al midleware thunk-redux tenemos acceso al dispatch dentro del return
export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    dispatch(startLoading());
    signInWithEmailAndPassword(auth, email, password)
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
    const auth = getAuth();
    dispatch(startLoading());
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        //update profile agrega el displayName, ya que este solo se crea cuando nos registramos con google o cualquier red social
        await updateProfile(user, { displayName: name });
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(finishLoading());
      });
  }
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
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

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
  }
};

export const logout = () => ({
  type: types.logout
});