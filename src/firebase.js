import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm0DXUc4ygggSb2WM0dx89fgXDtdMZJMY",
  authDomain: "bayzcrypt-a6bee.firebaseapp.com",
  projectId: "bayzcrypt-a6bee",
  storageBucket: "bayzcrypt-a6bee.appspot.com",
  messagingSenderId: "582973346254",
  appId: "1:582973346254:web:4f812dfac0c220b25a5b9f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
