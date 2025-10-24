// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqssedQCHtDKn3wZ28Y-S_Sa8rXyv5Z6Y",
  authDomain: "fir-warmpaws.firebaseapp.com",
  projectId: "fir-warmpaws",
  storageBucket: "fir-warmpaws.firebasestorage.app",
  messagingSenderId: "1052851188461",
  appId: "1:1052851188461:web:3d5eff3d2d188ab1b352e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);