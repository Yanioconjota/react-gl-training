// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4GVCMhYov_WXfhPeOWK_C-S9bzmlb6_4",
  authDomain: "react-app-cursos-c1ab7.firebaseapp.com",
  projectId: "react-app-cursos-c1ab7",
  storageBucket: "react-app-cursos-c1ab7.appspot.com",
  messagingSenderId: "514107416359",
  appId: "1:514107416359:web:cfb9b8b30a8d8d3f9a9302",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new GoogleAuthProvider();

export {
  db,
  googleAuthProvider
};
