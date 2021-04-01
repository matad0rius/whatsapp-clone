import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAco00DiSdK7g1RcplE-u6dM-D_GwUPZsc",
  authDomain: "whatsapp-clone-d0146.firebaseapp.com",
  projectId: "whatsapp-clone-d0146",
  storageBucket: "whatsapp-clone-d0146.appspot.com",
  messagingSenderId: "875713945905",
  appId: "1:875713945905:web:32a5eed134bef1beda9010",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
