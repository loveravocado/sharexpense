import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKUmEJwaFQ0kEeNaOul8z8ydV9ESC8U9Q",
  authDomain: "sharexpense2.firebaseapp.com",
  projectId: "sharexpense2",
  storageBucket: "sharexpense2.appspot.com",
  messagingSenderId: "341905260616",
  appId: "1:341905260616:web:cd6ee5be712b9f3f45187d",
  measurementId: "G-GW6Z63VK4K"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {db, auth, provider};