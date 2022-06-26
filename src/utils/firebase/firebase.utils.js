// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

//Firebase Datastore
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYK90Cri81C05lzxlpUkN2ywtCTXVGLqA",
  authDomain: "crwn-clothing-db-2022-b106e.firebaseapp.com",
  projectId: "crwn-clothing-db-2022-b106e",
  storageBucket: "crwn-clothing-db-2022-b106e.appspot.com",
  messagingSenderId: "1053258837711",
  appId: "1:1053258837711:web:76f00b51b8588c908611ba"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
 signInWithPopup(auth, provider);

 export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  

  const userSnapshot = await getDoc(userDocRef)
  

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      } )
    } catch(error) {
      console.log("error creating the user", error.message)
    }
  }
  //if user data exists

  return userDocRef


 }