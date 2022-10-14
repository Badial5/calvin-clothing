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
import { getFirestore, doc, getDoc, setDoc,
collection, writeBatch } from 'firebase/firestore'


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


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */


 export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return; 

    return await createUserWithEmailAndPassword(auth, email, password)
 }

 /* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

 export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return; 

  return await signInWithEmailAndPassword(auth, email, password)
}


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
export const signOutUser = async () => await signOut(auth)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

export const onAuthStateChangedListener = (callback) =>
 onAuthStateChanged(auth, callback )

 // COLLECTION

 //it needs the collectionKey and the actual doctument you want to add
 // rename our document as "objectsToAdd"
 export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    //just as I attend with the userDocRef likewise will I do the same here
    //I will need the db as the collectionRef and the collection key
    
    const collectionRef = collection(db, collectionKey)
    //Now how to store this objects inside this collectionRef thus we will need
    // transaction - it represent a successful unit of work to a db

    //to do that, we will NEED A BATCH(writeBatch - we imported)
    //WriteBatch helps us to  add all our data to the db

    // We patch on the db we are making the batch on
    const batch = writeBatch(db)

    //What allows me to do are plenty: Add, delete, edit, etc

    //the object is the objects in our SHOP_DATA we are passing it as
    //parameter 
    objectsToAdd.forEach((object) => {

      //object.title is the title defined from the SHOP_DATA
      const docRef = doc(collectionRef, object.title.toLowerCase())
      batch.set(docRef, object)
    })

    await batch.commit();
    console.log("done")

    //then I import it in my productContext
 }