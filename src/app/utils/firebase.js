// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "myblog-174eb.firebaseapp.com",
  projectId: "myblog-174eb",
  storageBucket: "myblog-174eb.appspot.com",
  messagingSenderId: "1093254521197",
  appId: "1:1093254521197:web:59274d990fed00f2e4fa64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
