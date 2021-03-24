import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
const firebaseConfig = {
  apiKey: "AIzaSyB4qGE3F3mY1iQI8RdxuG2IeN3IpUErJD4",
  authDomain: "pvt-achat-react-adib.firebaseapp.com",
  projectId: "pvt-achat-react-adib",
  storageBucket: "pvt-achat-react-adib.appspot.com",
  messagingSenderId: "1094983199635",
  appId: "1:1094983199635:web:4cdd5e3c1748cf33ad5666",
  measurementId: "G-30FWKTHH0D"
};

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
