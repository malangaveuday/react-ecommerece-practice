import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';


const config =  {
    apiKey: "AIzaSyC9RJFRY09jQ1ZIPLnCzyqoDkjGrsCa1fA",
    authDomain: "clothing-ecommerce-38313.firebaseapp.com",
    databaseURL: "https://clothing-ecommerce-38313.firebaseio.com",
    projectId: "clothing-ecommerce-38313",
    storageBucket: "clothing-ecommerce-38313.appspot.com",
    messagingSenderId: "728056950265",
    appId: "1:728056950265:web:54cdb3d2c48feb7ee96128"
};

firebase.initializeApp(config);

export const AUTH = firebase.auth();
export const STORAGE = firebase.storage();

// setting OAuth for google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => AUTH.signInWithRedirect(provider);

const FIREBASE = firebase;

export default FIREBASE;

