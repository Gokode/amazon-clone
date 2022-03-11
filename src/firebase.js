import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATIqnJYCD4X8436T-Y42A-Wu8KWf9nNfg",
    authDomain: "clone-bfcce.firebaseapp.com",
    projectId: "clone-bfcce",
    storageBucket: "clone-bfcce.appspot.com",
    messagingSenderId: "291436889532",
    appId: "1:291436889532:web:a05d96528e0c14083b97b9",
    measurementId: "G-TBHHW4V5C6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};