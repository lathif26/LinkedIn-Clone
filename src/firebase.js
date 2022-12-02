import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAchQloNFgRhz2G5DClzvMN5hhNbFTFJO8",
    authDomain: "linkedin-clone-b8fe5.firebaseapp.com",
    projectId: "linkedin-clone-b8fe5",
    storageBucket: "linkedin-clone-b8fe5.appspot.com",
    messagingSenderId: "220397725550",
    appId: "1:220397725550:web:edbcb78c276fdbc2cd037f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
