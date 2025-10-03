// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (use the one shown in Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyAxlD5qIswmdfXQYSOscq7fpN_VIp4Vorg",
  authDomain: "vismit-e6a92.firebaseapp.com",
  projectId: "vismit-e6a92",
  storageBucket: "vismit-e6a92.appspot.com",  // ✅ Correct format is appspot.com
  messagingSenderId: "963544340961",
  appId: "1:963544340961:web:62dd0f189361e885851aa0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

export { db };
