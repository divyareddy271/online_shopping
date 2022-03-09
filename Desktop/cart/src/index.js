import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANverbxH-93LOSm99qD9b5hm6k0-7Nvjk",
  authDomain: "cart-baa01.firebaseapp.com",
  projectId: "cart-baa01",
  storageBucket: "cart-baa01.appspot.com",
  messagingSenderId: "409734047661",
  appId: "1:409734047661:web:e282aee04eff0774db2324"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

