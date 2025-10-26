// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsCHXOCZ5ZHQQguY_P6s72kmVcdEBSYY",
  authDomain: "car-station-6393f.firebaseapp.com",
  projectId: "car-station-6393f",
  storageBucket: "car-station-6393f.appspot.com",
  messagingSenderId: "688616261764",
  appId: "1:688616261764:web:c41791cca8fcd4d7871ad1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
export const storage = getStorage(app);

export default app;
