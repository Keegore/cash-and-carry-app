// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// TODO: Add your own Firebase configuration object
const firebaseConfig = {
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKUbx16hnZbErBEcxYbcgEOjDEh-KWnKs",
  authDomain: "cash-and-carry-8dc30.firebaseapp.com",
  projectId: "cash-and-carry-8dc30",
  storageBucket: "cash-and-carry-8dc30.firebasestorage.app",
  messagingSenderId: "384986948474",
  appId: "1:384986948474:web:79d2cf72e29202ee672cc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getFirestore(app);

// Get a reference to the authentication service
const auth = getAuth(app);

export { db, auth };
