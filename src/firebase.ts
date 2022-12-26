import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDv2E6tDriuxB5DqgrYsqqpBf2bqGmmq5M",
  authDomain: "udemy-react-firebase-blog.firebaseapp.com",
  projectId: "udemy-react-firebase-blog",
  storageBucket: "udemy-react-firebase-blog.appspot.com",
  messagingSenderId: "45994417644",
  appId: "1:45994417644:web:290ae74232d874caf474c9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export {auth, provider, db};