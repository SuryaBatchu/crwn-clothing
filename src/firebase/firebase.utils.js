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

     export const createUserProfileDocument = async (userAuth, additionalData) =>{
       if (!userAuth) return;
       const userRef = firestore.doc(`users/${userAuth.uid}`);
       const snapShot = await userRef.get();
       if (!snapShot.exists){
         const {displayName, email} = userAuth;
        const createdAt = new Date();
        
          try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          }
          );
         }
         catch (error){
           console.log('error creating user', error.message);
         }
        }

     
      return userRef;

  };



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  
  export default firebase;