// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhwUMeSDXML8XdrZkhtmsL_jQ6AY7cElE",
  authDomain: "bookworm-dee5b.firebaseapp.com",
  databaseURL: "https://bookworm-dee5b-default-rtdb.firebaseio.com",
  projectId: "bookworm-dee5b",
  storageBucket: "bookworm-dee5b.appspot.com",
  messagingSenderId: "154682862646",
  appId: "1:154682862646:web:07c285c61efd3580723c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);