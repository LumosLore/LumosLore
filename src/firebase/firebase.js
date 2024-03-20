import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1RpTH6YH3n8Ln5Wa44DZyK-4OJdeUqC0",
  authDomain: "react-firebase-auth-logi-55a44.firebaseapp.com",
  projectId: "react-firebase-auth-logi-55a44",
  storageBucket: "react-firebase-auth-logi-55a44.appspot.com",
  messagingSenderId: "1049879183517",
  appId: "1:1049879183517:web:dad41a544037a0d334d474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)

export {app,auth};