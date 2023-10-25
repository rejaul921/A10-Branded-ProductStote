// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwEP8r2V5Ozq5GP0KEpk3AKC3UyrYijXo",
  authDomain: "soondor-brand-shop.firebaseapp.com",
  projectId: "soondor-brand-shop",
  storageBucket: "soondor-brand-shop.appspot.com",
  messagingSenderId: "293542123356",
  appId: "1:293542123356:web:6ced7f3117afb20d7c9399"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;