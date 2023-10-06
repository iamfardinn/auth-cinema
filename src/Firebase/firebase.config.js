// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBALG7VWIHtxy1n_3x0S9rgohwIENjULB4",
  authDomain: "auth-moha-m-fab40.firebaseapp.com",
  projectId: "auth-moha-m-fab40",
  storageBucket: "auth-moha-m-fab40.appspot.com",
  messagingSenderId: "440629088347",
  appId: "1:440629088347:web:b786498bc2815c69d92f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;