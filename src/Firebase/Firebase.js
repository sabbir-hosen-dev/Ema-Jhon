
import { FacebookAuthProvider, GoogleAuthProvider, getAuth} from "firebase/auth";

import firebaseConfig from "./firebase.config";
import { initializeApp } from 'firebase/app';



export const app =  initializeApp(firebaseConfig);


export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const facebookProvider = new FacebookAuthProvider();