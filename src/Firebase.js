import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAL5-36G7_J8_cSZpDx9XRDRpREtwZ3ra8",
  authDomain: "netflix-af8a6.firebaseapp.com",
  projectId: "netflix-af8a6",
  storageBucket: "netflix-af8a6.appspot.com",
  messagingSenderId: "502954303196",
  appId: "1:502954303196:web:e38721821b3e51be789e19",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default auth;
