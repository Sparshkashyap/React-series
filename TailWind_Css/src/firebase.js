/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJImcPzm-53PV10YtqtoGkofsciiay960",
  authDomain: "my-react-app-2703e.firebaseapp.com",
  projectId: "my-react-app-2703e",
  storageBucket: "my-react-app-2703e.firebasestorage.app",
  messagingSenderId: "356980619539",
  appId: "1:356980619539:web:f96311d59f4adc406e02e6",
  measurementId: "G-YPDH5YCFH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);