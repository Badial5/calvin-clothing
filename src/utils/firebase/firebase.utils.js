// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithRedirect, 
  signInWithPopup, GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged

} from 'firebase/auth'

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
 signInWithPopup(auth, googleProvider);

 export const signInWithGoogleRedirect = () => 
 signInWithRedirect(auth, googleProvider)

 export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return; 
  const userDocRef = doc(db, 'users', userAuth.uid);
   

  const userSnapshot = await getDoc(userDocRef)
  

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      } )
    } catch(error) {
      console.log("error creating the user", error.message)
    }
  }
  //if user data exists

  return userDocRef


 }

 export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return; 

    return await createUserWithEmailAndPassword(auth, email, password)
 }

 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return; 

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)



export const onAuthStateChangedListener = (callback) =>
 onAuthStateChanged(auth, callback )