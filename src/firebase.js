import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDnsX0LztcivPrlkmzdB6E8-Yk81snD9xY",
    authDomain: "scriptly-a2c84.firebaseapp.com",
    projectId: "scriptly-a2c84",
    storageBucket: "scriptly-a2c84.firebasestorage.app",
    messagingSenderId: "101514360864",
    appId: "1:101514360864:web:9b35bbcafabf6027e42445",
    measurementId: "G-5YTKRD4BWC"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);
  
  export { db, auth };