import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyAVJtcRxFzfmcWm7cT5oj-NkB839pQbUgQ",
  authDomain: "assignment-f01c3.firebaseapp.com",
  projectId: "assignment-f01c3",
  storageBucket: "assignment-f01c3.firebasestorage.app",
  messagingSenderId: "107843249223",
  appId: "1:107843249223:web:253dc626abcd805df33d62",
  measurementId: "G-GZJPCD1CLT",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
