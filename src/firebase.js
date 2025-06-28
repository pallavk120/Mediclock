// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Corrected Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAlNAxe1xURCYZzX2udstJtpmV_Pb5Hvfo",
  authDomain: "mediclockapp-6ee16.firebaseapp.com",
  projectId: "mediclockapp-6ee16",
  storageBucket: "mediclockapp-6ee16.appspot.com",
  messagingSenderId: "358910694811",
  appId: "1:358910694811:web:731890955e95748d893d3e",
  measurementId: "G-8QQRTW0VTK"
};

// Initialize
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
