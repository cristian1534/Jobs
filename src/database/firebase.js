import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_u6zpYtGZv-sh7vYQf8kWW1qJlYmy-R0",
  authDomain: "jobs-d281d.firebaseapp.com",
  projectId: "jobs-d281d",
  storageBucket: "jobs-d281d.appspot.com",
  messagingSenderId: "69340771879",
  appId: "1:69340771879:web:7bdafa85e5b18595d88002",
});

const db = firebase.firestore();
const storage = getStorage(firebaseApp);

export { db, firebaseApp, storage };
