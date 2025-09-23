import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { auth } from './app.js';

// Function to handle user sign-up
async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signed up:', userCredential.user);
    } catch (error) {
        console.error('Sign-up error:', error);
        alert(error.message);
    }
}

// Function to handle user sign-in
async function signIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Signed in:', userCredential.user);
    } catch (error) {
        console.error('Sign-in error:', error);
        alert(error.message);
    }
}

// Function to handle user sign-out
async function handleSignOut() {
    try {
        await signOut(auth);
        console.log('Signed out');
    } catch (error) {
        console.error('Sign-out error:', error);
        alert(error.message);
    }
}

export { signUp, signIn, handleSignOut };
