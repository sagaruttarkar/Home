// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxlD5qIswmdfXQYSOscq7fpN_VIp4Vorg",
  authDomain: "vismit-e6a92.firebaseapp.com",
  projectId: "vismit-e6a92",
  storageBucket: "vismit-e6a92.firebasestorage.app",
  messagingSenderId: "963544340961",
  appId: "1:963544340961:web:62dd0f189361e885851aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);  

//sagar

export { db };
