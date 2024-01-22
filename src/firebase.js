// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOD8oI_jueR_rdgWF5Uf5XBM78r6xNqck",
  authDomain: "typey-toe.firebaseapp.com",
  projectId: "typey-toe",
  storageBucket: "typey-toe.appspot.com",
  messagingSenderId: "165513109501",
  appId: "1:165513109501:web:de866042af4bf126614394",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
