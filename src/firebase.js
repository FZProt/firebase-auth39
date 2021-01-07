import firebase from 'firebase/app'
import "firebase/auth";

const app =  firebase.initializeApp({
  apiKey: "AIzaSyAGf4rxbZcz5qbNo_6pLnJeiKYVGogHZQM",
  authDomain: "fir-auth-development-d5166.firebaseapp.com",
  projectId: "fir-auth-development-d5166",
  storageBucket: "fir-auth-development-d5166.appspot.com",
  messagingSenderId: "1027424865997",
  appId: "1:1027424865997:web:a35f105a77f9ac03a86384"
  });
  // Initialize Firebase

const auth = app.auth();
export {auth};
export default app;