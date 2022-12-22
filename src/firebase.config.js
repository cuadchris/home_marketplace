// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDayrj8dQvsljLC3orwHsAKSwaYMtLMKgM",
  authDomain: "home-marketplace-1122d.firebaseapp.com",
  projectId: "home-marketplace-1122d",
  storageBucket: "home-marketplace-1122d.appspot.com",
  messagingSenderId: "1015129019073",
  appId: "1:1015129019073:web:f4c82cbfd3868591a7ba40",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
