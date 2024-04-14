// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBSE_API_KEY,
  authDomain: "portfolio-e550f.firebaseapp.com",
  projectId: "portfolio-e550f",
  storageBucket: "portfolio-e550f.appspot.com",
  messagingSenderId: "577240792891",
  appId: "1:577240792891:web:ab1a5dab42f744ca1d411e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
