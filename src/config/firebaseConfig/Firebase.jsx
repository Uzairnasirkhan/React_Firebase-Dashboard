// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCANmniqrbjXydegF2oZDB_D2htquFT8zI",
  authDomain: "react-dashboard-5fd08.firebaseapp.com",
  projectId: "react-dashboard-5fd08",
  storageBucket: "react-dashboard-5fd08.firebasestorage.app",
  messagingSenderId: "1043858633506",
  appId: "1:1043858633506:web:7d2e53ea5b4c38676f6b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)