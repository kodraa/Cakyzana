// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX2KFYohl1j-zySzLl03F2RRjMmnqgQ1I",
  authDomain: "cakyzana.firebaseapp.com",
  projectId: "cakyzana",
  storageBucket: "cakyzana.appspot.com",
  messagingSenderId: "544001275088",
  appId: "1:544001275088:web:c16027d8f4f4301a6a1ad5",
  measurementId: "G-M2CNXZ9KWG",

  // apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.PUBLIC_FIREBASE_APP_ID,
  // measurementId: process.env.PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// import db from firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;



