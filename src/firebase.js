import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBryul2_zPuqiD5H3c9MYWbmUgR5j9l5kU",
  authDomain: "listatp3.firebaseapp.com",
  databaseURL: "https://listatp3-default-rtdb.firebaseio.com",
  projectId: "listatp3",
  storageBucket: "listatp3.appspot.com",
  messagingSenderId: "724895051542",
  appId: "1:724895051542:web:2aab5b1de38aedcec92a37"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
