// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-12ded.firebaseapp.com",
  projectId: "mern-estate-12ded",
  storageBucket: "mern-estate-12ded.firebasestorage.app",
  messagingSenderId: "19497341966",
  appId: "1:19497341966:web:d75b220c7c9a68f691d85f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);