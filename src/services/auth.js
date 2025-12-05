// src/services/auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

export async function signUp(email, password) {
  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    return userCred.user;
  } catch (err) {
    console.error("signUp:", err);
    throw err;
  }
}

export async function signIn(email, password) {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    return userCred.user;
  } catch (err) {
    console.error("signIn:", err);
    throw err;
  }
}

export async function signOutUser() {
  await signOut(auth);
}