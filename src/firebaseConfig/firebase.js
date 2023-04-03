import { initializeApp } from "firebase/app";
//Importacion para la base de datos firestore
import {getFirestore} from '@firebase/firestore'
//Importacion de auth
import {getAuth} from "firebase/auth";

//Conexion a mi proyecto creado con firebase // se copia desde firebase
//NO hace falta end points
const firebaseConfig = {
  apiKey: "AIzaSyAnLef3swj5XOzcitVbXBFFF554fOnnNF0",
  authDomain: "crud-ingweb.firebaseapp.com",
  projectId: "crud-ingweb",
  storageBucket: "crud-ingweb.appspot.com",
  messagingSenderId: "699084739104",
  appId: "1:699084739104:web:2fc48fddabc5fba8cba245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Conexion con la base de datos

export const db = getFirestore(app)


export const auth = getAuth(app);