
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';

//Aqui vocês devem colocar as suas credenciais
const firebaseConfig = {
  apiKey: "AIzaSyC3hLHPWSBhrG0RddpEsoxO1MmdlrovayA",
  authDomain: "mirellaifal513.firebaseapp.com",
  projectId: "mirellaifal513",
  storageBucket: "mirellaifal513.appspot.com",
  messagingSenderId: "561699838245",
  appId: "1:561699838245:web:141a6ac07c0907ae68e2cc",
  measurementId: "G-MVTNMLVH1H"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app)

export { app, auth }
