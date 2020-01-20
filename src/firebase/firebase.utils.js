import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyBSc15hLQqwxjxwgcFwkb-v7ymmJ9TiAhs",
  authDomain: "e-commerce-ea878.firebaseapp.com",
  databaseURL: "https://e-commerce-ea878.firebaseio.com",
  projectId: "e-commerce-ea878",
  storageBucket: "e-commerce-ea878.appspot.com",
  messagingSenderId: "529284012928",
  appId: "1:529284012928:web:f5a0cf785abf751349bf65",
  measurementId: "G-96TE2WQZD7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
