import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV2htNkgUH6H_fMhktG1u4oiZOSiAHI0c",
  authDomain: "photogram-b0cc1.firebaseapp.com",
  projectId: "photogram-b0cc1",
  storageBucket: "photogram-b0cc1.appspot.com",
  messagingSenderId: "312660460925",
  appId: "1:312660460925:web:dbb2c071dbd2f14b907814",
  measurementId: "G-BWGGNEV0RS",
};

//   Intialize firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
