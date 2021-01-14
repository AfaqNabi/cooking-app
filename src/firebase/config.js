import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0o0uxEvDc4bko6N16ANpYAj42iitCn78",
  authDomain: "cooking-app-5a890.firebaseapp.com",
  databaseURL: "https://cooking-app-5a890-default-rtdb.firebaseio.com",
  projectId: "cooking-app-5a890",
  storageBucket: "cooking-app-5a890.appspot.com",
  messagingSenderId: "1009359500514",
  appId: "1:1009359500514:web:6aa254ab2f63f3393edabb",
  measurementId: "G-3CL4YSFSV9",
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export { db };
