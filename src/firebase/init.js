import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtfu9Sf7TaquBufPnDfbIo7KOE3qa0Qlo",
  authDomain: "wealth-plus-95aca.firebaseapp.com",
  databaseURL: "https://wealth-plus-95aca.firebaseio.com",
  projectId: "wealth-plus-95aca",
  storageBucket: "wealth-plus-95aca.appspot.com",
  messagingSenderId: "911977702313",
  appId: "1:911977702313:web:e7b737369fc877b5461ab8",
  measurementId: "G-DEF4LSNBTC"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();