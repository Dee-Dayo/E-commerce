// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2jlOwCMiHlI123YLDayDReUNRczp-ppU",
  authDomain: "jumia-fdc1d.firebaseapp.com",
  projectId: "jumia-fdc1d",
  storageBucket: "jumia-fdc1d.firebasestorage.app",
  messagingSenderId: "219644413271",
  appId: "1:219644413271:web:7e866cfaa73fa63c78ea12"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}