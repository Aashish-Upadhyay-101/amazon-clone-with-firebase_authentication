import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCY2dHF2iGMBaWO4-A-F7dmOESAZY_ZxZU",
  authDomain: "clone-59603.firebaseapp.com",
  projectId: "clone-59603",
  storageBucket: "clone-59603.appspot.com",
  messagingSenderId: "884917467037",
  appId: "1:884917467037:web:84cae0d103eff745c0e174",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
