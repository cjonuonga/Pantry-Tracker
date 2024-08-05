// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXFBg4sOBafi_PPAp8ShIz_H2Z5Xga81I",
  authDomain: "inventory-tracker-f0ece.firebaseapp.com",
  projectId: "inventory-tracker-f0ece",
  storageBucket: "inventory-tracker-f0ece.appspot.com",
  messagingSenderId: "746129784811",
  appId: "1:746129784811:web:c54a0b9cb0197da328a3ae",
  measurementId: "G-FF9S7W1W69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
