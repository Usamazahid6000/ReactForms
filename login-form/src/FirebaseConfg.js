import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDgIoNdDFc2R0r9HaExOuwcpzhT3pPQULU",
  authDomain: "registrationform-299da.firebaseapp.com",
  projectId: "registrationform-299da",
  storageBucket: "registrationform-299da.appspot.com",
  messagingSenderId: "469435824787",
  appId: "1:469435824787:web:57f64798a69bbe792d6b66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
