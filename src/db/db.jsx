// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD_HJdqEDpJt33lS7GTIdrmZCyKzmRvwHQ",
  authDomain: "bulonerajeanneret.firebaseapp.com",
  projectId: "bulonerajeanneret",
  storageBucket: "bulonerajeanneret.appspot.com",
  messagingSenderId: "264518535298",
  appId: "1:264518535298:web:a1b7b9877c909a834e8c9b",
  // measurementId: "G-PGCXWW6BKP",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;
