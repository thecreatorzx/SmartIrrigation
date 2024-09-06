// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOhHUMbpcBt7JuB8EmzltpXLNpQg1GBh0",
  authDomain: "smart-irrigation-8add5.firebaseapp.com",
  projectId: "smart-irrigation-8add5",
  storageBucket: "smart-irrigation-8add5.appspot.com",
  messagingSenderId: "245714124639",
  appId: "1:245714124639:web:131e311aba19cf7ada40ea",
  measurementId: "G-WDNXR1BV1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
