import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBor318JIjOTUZ78dLtVfRWkLsEf7z1ILc",
  authDomain: "invoicegen-73d01.firebaseapp.com",
  projectId: "invoicegen-73d01",
  storageBucket: "invoicegen-73d01.appspot.com",
  messagingSenderId: "457258145230",
  appId: "1:457258145230:web:6d0aeceeaa1bc9490b879f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert((err as Error).message);
  }
};
const logInWithEmailAndPassword = async (email:string, password:string) => {
  try {
    await signInWithEmailAndPassword( auth, email, password);
  } catch (err) {
    console.error(err);
    alert((err as Error).message);
  }
};
const registerWithEmailAndPassword = async (name:string, email:string,companyName:string, password:string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      companyName,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert((err as Error).message);
  }
};
const sendPasswordReset = async (email:string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert((err as Error).message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};