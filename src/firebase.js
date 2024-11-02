// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB55uYTAYBLw5tkItYKSxUVVU06mxthdd8",
  authDomain: "lapatesseriedejoie.firebaseapp.com",
  projectId: "lapatesseriedejoie",
  storageBucket: "lapatesseriedejoie.firebasestorage.app",
  messagingSenderId: "291574499503",
  appId: "1:291574499503:web:c9215384447b7295b1ac5a",
  measurementId: "G-TGDFN12FV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);