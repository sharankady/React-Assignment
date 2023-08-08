// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
//  

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_aUQnzwZl15JKJVh-eLcPsZAqegHseko",
  authDomain: "react-assignment-5d916.firebaseapp.com",
  projectId: "react-assignment-5d916",
  storageBucket: "react-assignment-5d916.appspot.com",
  messagingSenderId: "610510225449",
  appId: "1:610510225449:web:7fb5a5d689f2f8e7585c38",
  measurementId: "G-73JMLS04K8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
 