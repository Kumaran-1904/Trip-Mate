// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwVjxw3UQz5K_hyVO8wFEhhCk9Q9Dv6lY",
  authDomain: "trip-mate-d4136.firebaseapp.com",
  projectId: "trip-mate-d4136",
  storageBucket: "trip-mate-d4136.firebasestorage.app",
  messagingSenderId: "376417514849",
  appId: "1:376417514849:web:855ac3779a63b44a570120",
  measurementId: "G-EKBKZP8WC0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
// const analytics = getAnalytics(app);
