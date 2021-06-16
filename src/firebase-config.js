import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDUsu8c9cyBByuCsDCDvzE8-bDeVjvuVoM",
    authDomain: "inventory-mgmt-205d3.firebaseapp.com",
    projectId: "inventory-mgmt-205d3",
    storageBucket: "inventory-mgmt-205d3.appspot.com",
    messagingSenderId: "405678360816",
    appId: "1:405678360816:web:ef7f1b54f20903d1b65a35",
    measurementId: "G-4MMP6PR3MZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const databaseRef = firebase.firestore();
export const firebaseAuth = firebase.auth();
