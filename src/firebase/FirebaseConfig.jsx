// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWFS7EiqKBOjo55WrzwHJuH-DB8Ek4QRE",
  authDomain: "my-ecommerce-bb13a.firebaseapp.com",
  projectId: "my-ecommerce-bb13a",
  storageBucket: "my-ecommerce-bb13a.appspot.com",
  messagingSenderId: "535339423811",
  appId: "1:535339423811:web:c8d0c3984bfb7478215cf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
