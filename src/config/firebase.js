
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC0_PIDHDAY9uoFQxWXk_o0i48Gou8N_zg",
  authDomain: "projetoum-instituto.firebaseapp.com",
  projectId: "projetoum-instituto",
  storageBucket: "projetoum-instituto.appspot.com",
  messagingSenderId: "69660154172",
  appId: "1:69660154172:web:11d517e5b614fa1b04a639"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db