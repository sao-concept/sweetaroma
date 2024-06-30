import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8y-vURLNKGMIrsuu38PNwID8q0WYlSuM",
  authDomain: "sweetaroma-38bc5.firebaseapp.com",
  projectId: "sweetaroma-38bc5",
  storageBucket: "sweetaroma-38bc5.appspot.com",
  messagingSenderId: "697173059316",
  appId: "1:697173059316:web:19d4a553697d02810e20a1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const FirebaseAuth = () => {
  const auth = firebase.auth();

  const signInWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const createUserWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signInWithGooglePopup = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
  };

  return {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithGooglePopup,
  };
};

export default FirebaseAuth;
