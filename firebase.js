// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7cbNFdwqcUi1DnPwqimTd5W3-f08PaNE",
  authDomain: "optiqos-b651c.firebaseapp.com",
  projectId: "optiqos-b651c",
  storageBucket: "optiqos-b651c.appspot.com",
  messagingSenderId: "960320979847",
  appId: "1:960320979847:web:5d6c854577ad41f9a88922",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
