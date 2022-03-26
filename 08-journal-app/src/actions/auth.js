import Swal from "sweetalert2";
import { types } from "../types/types";
import {
  googleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from "../firebase/firebase-config";
import { finishLoading, startLoading } from "./ui";
import { notesLogout } from "./notes";

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
      .catch((err) => {
        dispatch(finishLoading());
        //mensaje de error en modal
        Swal.fire('Error', err.message, 'error');
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
        dispatch(finishLoading());
        //mensaje de error en modal
        Swal.fire("Error", err.message, "error");
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    const auth = getAuth();
    await signOut(auth);
    dispatch(logout());
    dispatch(notesLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
