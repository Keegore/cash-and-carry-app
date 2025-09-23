import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from './app.js';

const loginScreen = document.getElementById('login-screen');
const inventoryGrid = document.getElementById('inventory-grid');

// Function to handle user sign-up
async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signed up:', userCredential.user);
    } catch (error) {
        console.error('Sign-up error:', error);
    }
}

// Function to handle user sign-in
async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Signed in:', userCredential.user);
    } catch (error) {
        console.error('Sign-in error:', error);
    }
}

// Listen for authentication state changes
onAuthStateChanged(auth, user => {
    if (user) {
        // User is signed in
        loginScreen.classList.add('hidden');
        inventoryGrid.classList.remove('hidden');
    } else {
        // User is signed out
        loginScreen.classList.remove('hidden');
        inventoryGrid.classList.add('hidden');
    }
});

export { signUp, signIn };
