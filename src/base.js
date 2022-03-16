import Rebase from "re-base";
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBBVWf3mPyytyByz1s9rqDy5qKFOK8JvgM",
    authDomain: "chatbox-5a8b8.firebaseapp.com",
    databaseURL: "https://chatbox-5a8b8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chatbox-5a8b8",
    storageBucket: "chatbox-5a8b8.appspot.com",
    messagingSenderId: "833462626212",
    appId: "1:833462626212:web:d28eb946aaf02dfdc44331"
}

// Initialize firebase
const app = firebase.initializeApp(firebaseConfig)

const base = Rebase.createClass(app.database())

export default base