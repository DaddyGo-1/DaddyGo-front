// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { enableIndexedDbPersistence } from "firebase/firestore"; 
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLAUj2RGal5pOGigOw2QA2BfhmvxHWgPg",
  authDomain: "daddygo-ba042.firebaseapp.com",
  projectId: "daddygo-ba042",
  storageBucket: "daddygo-ba042.appspot.com",
  messagingSenderId: "59705820200",
  appId: "1:59705820200:web:9f778b66acdf93b8d1611d",
  measurementId: "G-NEHCQVJZ4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);