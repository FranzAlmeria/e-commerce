import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMlkP1mUgjD5yTRRzpTz1LXIQjgKFQrCE",
  authDomain: "e-commerce-db-4175d.firebaseapp.com",
  projectId: "e-commerce-db-4175d",
  storageBucket: "e-commerce-db-4175d.appspot.com",
  messagingSenderId: "313801818906",
  appId: "1:313801818906:web:d31f012faefc985d7ee2a3",
  measurementId: "G-6530TVMFJ6"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
  const userSnapShot = await getDoc(userDocRef)
  console.log(userSnapShot)
  console.log(userSnapShot.exists())

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error catching the user', error.message)
    }
  }
}