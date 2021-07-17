import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDrQwyfPwi0FCiDdxv71deWpkgNy2q7Zzo",
  authDomain: "photo-gallery-7422c.firebaseapp.com",
  projectId: "photo-gallery-7422c",
  storageBucket: "photo-gallery-7422c.appspot.com",
  messagingSenderId: "189448733961",
  appId: "1:189448733961:web:a71a3336416402d7917fd8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
