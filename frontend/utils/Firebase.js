import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "e-commerce-52146.firebaseapp.com",
  projectId: "e-commerce-52146",
  storageBucket: "e-commerce-52146.firebasestorage.app",
  messagingSenderId: "620621686761",
  appId: "1:620621686761:web:a3c49e9c8f247208e84d78"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

