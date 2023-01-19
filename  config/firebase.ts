import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCaG5Mo5nBEPlpdhS-ZM4vKP16aKOY-E7o",
  authDomain: "youneedverse-e9492.firebaseapp.com",
  databaseURL:
    "https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "youneedverse-e9492",
  storageBucket: "youneedverse-e9492.appspot.com",
  messagingSenderId: "462007948289",
  appId: "1:462007948289:web:cf433fabbd796f8eed5c00",
  measurementId: "G-7CSDDGHMYW",
};

export const app = initializeApp(firebaseConfig);
