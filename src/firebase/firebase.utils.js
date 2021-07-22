import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyDzAPDNDDVFIBv-wC-YAx4TteeJooDUQ1U",
    authDomain: "crwn-clothing-1229.firebaseapp.com",
    projectId: "crwn-clothing-1229",
    storageBucket: "crwn-clothing-1229.appspot.com",
    messagingSenderId: "1053405214756",
    appId: "1:1053405214756:web:8b12b04014c57b2fba00b1",
    measurementId: "G-RZE5K515CR"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

  export default firebase;