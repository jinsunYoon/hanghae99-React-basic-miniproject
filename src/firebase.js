// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyABBTX4H7krvS2ouUlkmyE2tuxz8oM4usg",
    authDomain: "project-week2-1c513.firebaseapp.com",
    projectId: "project-week2-1c513",
    storageBucket: "project-week2-1c513.appspot.com",
    messagingSenderId: "985744520139",
    appId: "1:985744520139:web:62031c7ced82f60214bc4e",
    measurementId: "G-VH3RV5TXJK"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();