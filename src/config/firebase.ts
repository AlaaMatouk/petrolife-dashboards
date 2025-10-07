// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSsCHXOCZ5ZHQQguY_P6s72kmVcdEBSYY",
  authDomain: "car-station-6393f.firebaseapp.com",
  projectId: "car-station-6393f",
  storageBucket: "car-station-6393f.appspot.com",
  messagingSenderId: "688616261764",
  appId: "1:688616261764:web:4d33f6b0ce57e673871ad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

