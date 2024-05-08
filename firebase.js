// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDB__f_glEVwMZioLPb5cIsrs3Pv2lFxdM",
    authDomain: "devapp-c9602.firebaseapp.com",
    projectId: "devapp-c9602",
    storageBucket: "devapp-c9602.appspot.com",
    messagingSenderId: "1078155283496",
    appId: "1:1078155283496:web:58bdf2ef68e9970da2b91d"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

export { firebase };

//ios: 1078155283496-pd993oggleujre5ba8bresif9udd9u1q.apps.googleusercontent.com