// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJyxsbfnFVmTkWLny4U6kc4SlZIg24Mic",
  authDomain: "raul-s-hs.firebaseapp.com",
  projectId: "raul-s-hs",
  storageBucket: "raul-s-hs.appspot.com",
  messagingSenderId: "633856444715",
  appId: "1:633856444715:web:820dcebe226336901a9d6e"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);