
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Ox9KVaHLyrG6gH9wcgcNJO8IAWoxpH4",
  authDomain: "kids-ac884.firebaseapp.com",
  projectId: "kids-ac884",
  storageBucket: "kids-ac884.appspot.com",
  messagingSenderId: "485624098826",
  appId: "1:485624098826:web:0f3c63d8c8204af1456ff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};