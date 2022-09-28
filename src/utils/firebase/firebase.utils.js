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

// This time we are using SignIn with Google
// We can use different providers 
const googleProvider = new GoogleAuthProvider();

//anytime the user click it forced them to select an account
googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => (
  signInWithPopup(auth, googleProvider)
)

 export const signInWithGoogleRedirect = () => 
 signInWithRedirect(auth, googleProvider)






/* ----------------------------------------------------------------------------------- */
          //FIRESTORE

 export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  //if the user does not authenticate, then return the app
  if(!userAuth) return; 
  const userDocRef = doc(db, 'users', userAuth.uid);
   

  //checking if the instance if the db exists 
  const userSnapshot = await getDoc(userDocRef)
  

  //if the existance does not exist then go ahead and create new one
  if(!userSnapshot.exists()){


    //this is going to happen if userdocref does not
    //exists 
    //defining variables to be used
    const {displayName, email} = userAuth
    const createdAt = new Date();
    // You can define your addition cariables here
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        //addition variables or fields we are going to use
        //I set it to objects
        ...additionalInformation
      } )
    } catch(error) {
      console.log("error creating the user", error.message)
    }
  }



  //if user data exists then don't create new one just return it
  return userDocRef


 }

 // ================================================================================

 //             create user with email and password
 export const createAuthUserWithEmailAndPassword = async (email, password) => {

    //if it does not return email or password, then exist the app
    if(!email || !password) return; 

    return await createUserWithEmailAndPassword(auth, email, password)
 }

 // sign in user with email and password

 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return; 

  return await signInWithEmailAndPassword(auth, email, password)
}


//log the user out 
export const signOutUser = async () => await signOut(auth)



// onAuthStateChangedListener to listen to auth state change 
export const onAuthStateChangedListener = (callback) =>
 onAuthStateChanged(auth, callback )