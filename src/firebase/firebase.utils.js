import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANcjrqMZgwiGK_D_5qghOxlyzgG1zZFvw",
    authDomain: "crwn-db-b8557.firebaseapp.com",
    projectId: "crwn-db-b8557",
    storageBucket: "crwn-db-b8557.appspot.com",
    messagingSenderId: "313921442581",
    appId: "1:313921442581:web:3bba90d606272a29630f1c",
    measurementId: "G-D37FDHQBRQ"
 };

 firebase.initializeApp(config);

 export const auth = firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt: 'select_account'});
 export const signInWithGoogle =  () => auth.signInWithPopup(provider);

 export default firebase;