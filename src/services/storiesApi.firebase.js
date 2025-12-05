// src/services/storiesApi.firebase.js
import {
  collection,
  query,
  orderBy,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";

/* Récupère toutes les stories */
export async function fetchStories() {
  try {
    const q = query(collection(db, "stories"), orderBy("name", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (err) {
    console.error("fetchStories:", err);
    throw err;
  }
}

/* Récupère une story par ID (string) */
export async function fetchStoryById(id) {
  try {
    const docRef = doc(db, "stories", id);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
  } catch (err) {
    console.error("fetchStoryById:", err);
    throw err;
  }
}

/* Ajoute une story. Optionnel : upload d'image (File). */
export async function addStory(story, file /* optional File */) {
  try {
    const colRef = collection(db, "stories");
    const createdRef = await addDoc(colRef, {
      ...story,
      createdAt: serverTimestamp()
    });

    if (file) {
      // Upload file to Storage at stories/{docId}/{filename}
      const sRef = storageRef(storage, `stories/${createdRef.id}/${file.name}`);
      await uploadBytes(sRef, file);
      const url = await getDownloadURL(sRef);
      await updateDoc(createdRef, { coverImage: url });
    }

    return createdRef.id;
  } catch (err) {
    console.error("addStory:", err);
    throw err;
  }
}