import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "REACT_APP_API_KEY",
  authDomain: "REACT_APP_AUTH_DOMAIN",
  projectId: "REACT_APP_PROJECT_ID",
  storageBucket: "REACT_APP_BUCKET",
  messagingSenderId: "REACT_APP_SENDER_ID",
  appId: "REACT_APP_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()
