import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwZHnvOlOQttqvyIoePmihWm8Fa109c2o",
  authDomain: "online-clothing-store-f2dfb.firebaseapp.com",
  projectId: "online-clothing-store-f2dfb",
  storageBucket: "online-clothing-store-f2dfb.appspot.com",
  messagingSenderId: "112127502216",
  appId: "1:112127502216:web:6d45d773a4218727307c3d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
