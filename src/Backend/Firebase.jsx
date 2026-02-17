// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//! import all the services that you want
import{getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRQ4J9xDxGgM9md_iWl438Hzws53bplV8",
  authDomain: "fooddelivery-b16a8.firebaseapp.com",
  projectId: "fooddelivery-b16a8",
  storageBucket: "fooddelivery-b16a8.firebasestorage.app",
  messagingSenderId: "596569354878",
  appId: "1:596569354878:web:5824a7eb272bb110541e2f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


export let __AUTH = getAuth(firebaseApp)
 export let __DB = getFirestore(firebaseApp)