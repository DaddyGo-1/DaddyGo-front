// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPDooI_OKFW6Z0TMcoq1mKQpz4lEruYPA",
  authDomain: "daddygo-512b3.firebaseapp.com",
  projectId: "daddygo-512b3",
  storageBucket: "daddygo-512b3.appspot.com",
  messagingSenderId: "517536663533",
  appId: "1:517536663533:web:059b1ce0f5a77547a209e4",
  measurementId: "G-QG0PJY8WHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
