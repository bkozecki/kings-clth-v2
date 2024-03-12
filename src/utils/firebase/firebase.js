import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClwuEepcrJDwiXanIy0OfKmd4NEXdjdYc",
  authDomain: "crown-db-545e8.firebaseapp.com",
  projectId: "crown-db-545e8",
  storageBucket: "crown-db-545e8.appspot.com",
  messagingSenderId: "1043477674709",
  appId: "1:1043477674709:web:a2afc6eff3c961b033005c",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

//// LOGIN WITH GOOGLE

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const firestoreDb = getFirestore();

export const createUserDocFromAuth = async (user, additionalInfo = {}) => {
  if (!user) return;

  const userDocRef = doc(firestoreDb, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userDocRef;
};

//// LOGIN WITH EMAIL AND PASSWORD

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmailAndPasswordFn = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

/// SIGN USER OUT
export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
