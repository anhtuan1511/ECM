
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXf59IoaEP-O5k53QeY9vp6N_PtTIKUlA",
  authDomain: "blog-ab393.firebaseapp.com",
  projectId: "blog-ab393",
  storageBucket: "blog-ab393.appspot.com",
  messagingSenderId: "176363802796",
  appId: "1:176363802796:web:726645617a5df31d134f09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};