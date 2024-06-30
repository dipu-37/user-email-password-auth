// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvQkSBf2JE1oQ_amjvAnRcVL88aKCAq0A",
  authDomain: "user-email-passwoed-auth-f0ee3.firebaseapp.com",
  projectId: "user-email-passwoed-auth-f0ee3",
  storageBucket: "user-email-passwoed-auth-f0ee3.appspot.com",
  messagingSenderId: "690013356930",
  appId: "1:690013356930:web:1f7d2c60983dcb3d6c459b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;