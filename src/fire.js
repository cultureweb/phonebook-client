import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyByjmaIKyNODBURbz8nxGqixCubuTKQp8E",
  authDomain: "phonebook-5e183.firebaseapp.com",
  projectId: "phonebook-5e183",
  storageBucket: "phonebook-5e183.appspot.com",
  messagingSenderId: "978730054274",
  appId: "1:978730054274:web:3da013282355a96ab33a9b",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
