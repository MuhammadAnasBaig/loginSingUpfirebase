import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
    getFirestore, collection, addDoc, setDoc, doc, query, where, getDocs, getDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDrAFU8387tMk2FIuu4BS_JTlQ-LhfyXbE",
    authDomain: "login-singup-78301.firebaseapp.com",
    projectId: "login-singup-78301",
    storageBucket: "login-singup-78301.appspot.com",
    messagingSenderId: "344461153312",
    appId: "1:344461153312:web:87b0cb9981b7c2115a5845"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
    auth,
    app,
    db,
    getFirestore,
    collection,
    addDoc,
    setDoc,
    doc,
    getDoc,
    getAuth,
    createUserWithEmailAndPassword,
    query,
    where,
    getDocs,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDrAFU8387tMk2FIuu4BS_JTlQ-LhfyXbE",
//   authDomain: "login-singup-78301.firebaseapp.com",
//   projectId: "login-singup-78301",
//   storageBucket: "login-singup-78301.appspot.com",
//   messagingSenderId: "344461153312",
//   appId: "1:344461153312:web:87b0cb9981b7c2115a5845"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);