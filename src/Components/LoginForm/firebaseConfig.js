import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyAO80US12If3X0QZ77A7clTwnj16o8_F0w",
  authDomain: "react-firebase-auth-70b52.firebaseapp.com",
  projectId: "react-firebase-auth-70b52",
  storageBucket: "react-firebase-auth-70b52.appspot.com",
  messagingSenderId: "166365895173",
  appId: "1:166365895173:web:52408319fa00e6fe455a6c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
