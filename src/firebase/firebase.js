// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLoFO1QGfgkSfxdsp61UvOWz8Fn1IuqfQ",
  authDomain: "aquienletocadb.firebaseapp.com",
  projectId: "aquienletocadb",
  storageBucket: "aquienletocadb.appspot.com",
  messagingSenderId: "694316714292",
  appId: "1:694316714292:web:df183ccce10c275d1bfd61",
  measurementId: "G-BQM2NQ6DJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);