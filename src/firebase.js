import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQGYvddpX97n9l-K5NIBK0fxaIKkLkKEg",
    authDomain: "sharexpense-269df.firebaseapp.com",
    projectId: "sharexpense-269df",
    storageBucket: "sharexpense-269df.appspot.com",
    messagingSenderId: "73843866638",
    appId: "1:73843866638:web:1b2ab0ba6efb1ebae8105f",
    measurementId: "G-2RVJKJ85QG"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {db, auth, provider};