import firebase from 'firebase'
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBVdLFVxFB59Ee-oYAar4IM-JB1ETJuBjo",
    authDomain: "auth-system-react.firebaseapp.com",
    databaseURL: "https://auth-system-react.firebaseio.com",
    projectId: "auth-system-react",
    storageBucket: "auth-system-react.appspot.com",
    messagingSenderId: "346641420723",
    appId: "1:346641420723:web:516d4f8678479e181bbbc6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;