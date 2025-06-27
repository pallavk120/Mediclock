import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAlNAxe1xURCYZzX2udstJtpmV_Pb5Hvfo",
  authDomain: "mediclockapp-6ee16.firebaseapp.com",
  projectId: "mediclockapp-6ee16",
  storageBucket: "mediclockapp-6ee16.firebasestorage.app",
  messagingSenderId: "358910694811",
  appId: "1:358910694811:web:731890955e95748d893d3e",
  measurementId: "G-8QQRTW0VTK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
