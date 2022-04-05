// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Config de dev/prod
const firebaseConfig = {
  apiKey: "AIzaSyB4GVCMhYov_WXfhPeOWK_C-S9bzmlb6_4",
  authDomain: "react-app-cursos-c1ab7.firebaseapp.com",
  projectId: "react-app-cursos-c1ab7",
  storageBucket: "react-app-cursos-c1ab7.appspot.com",
  messagingSenderId: "514107416359",
  appId: "1:514107416359:web:cfb9b8b30a8d8d3f9a9302",
};

const firebaseConfigTesting = {
  apiKey: "AIzaSyBbSxQSRThz0nSjzhMV0zfoV6H-2hZd3pY",
  authDomain: "react-app-curso-testing-fe9b8.firebaseapp.com",
  projectId: "react-app-curso-testing-fe9b8",
  storageBucket: "react-app-curso-testing-fe9b8.appspot.com",
  messagingSenderId: "797641460323",
  appId: "1:797641460323:web:1b01159f87031253e94656",
};

//console.log(process.env);

//nos fijamos en que ambiente estamos a través de las variables globales de entorno
if (process.env.NODE_ENV === 'test') {
  //testing
  // Initialize Firebase
  firebase.initializeApp(firebaseConfigTesting);
} else {
  // dev/prod
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
};
