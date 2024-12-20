// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5e2XABJj3K4CwpxMZV3sambYQ5POkJoA",
  authDomain: "letrasyespecias.firebaseapp.com",
  projectId: "letrasyespecias",
  storageBucket: "letrasyespecias.firebasestorage.app",
  messagingSenderId: "145552732531",
  appId: "1:145552732531:web:34266183bb7957392f5506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);