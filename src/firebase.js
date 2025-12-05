// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTfQ1GO7G55KbE22zoYnzkjqNX6Lt7IrI",
  authDomain: "histoires-tunisie.firebaseapp.com",
  projectId: "histoires-tunisie",
  storageBucket: "histoires-tunisie.firebasestorage.app",
  messagingSenderId: "486556654118",
  appId: "1:486556654118:web:4996dd8a7d47b13116a4e7",
  measurementId: "G-C4BFJ7R7Y6"
};  

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { db, storage, auth };