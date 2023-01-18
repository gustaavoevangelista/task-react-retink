import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app'
import { getAuth , onAuthStateChanged } from 'firebase/auth';


const firebaseApp = initializeApp({
  apiKey: "AIzaSyA1yrtLhRQd9xsd2lUk7tlyxdgkT0SNBjw",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
})

const auth = getAuth(firebaseApp)


onAuthStateChanged(auth, user =>{
  if (user !== null){
    console.log("Logged in!")
  }
  else{
    console.log("No user.")
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

