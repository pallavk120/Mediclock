import React, { useState, useEffect } from "react";
import { auth, db } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

function MediClockApp() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [patientInfo, setPatientInfo] = useState({ name: "", condition: "" });
  const [medicines, setMedicines] = useState([]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setLoggedIn(true);
        const userDoc = doc(db, "users", user.email);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.medicines) setMedicines(data.medicines);
          if (data.patientInfo) setPatientInfo(data.patientInfo);
        }
      }
    });
  }, []);

  return (
    <div style={{ padding: 20 }}>
      {!loggedIn ? (
        <div>
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          {isSignup ? (
            <button onClick={handleSignup}>Sign Up</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
          <br />
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
          </button>
        </div>
      ) : (
        <div>
          <h2>Welcome to MediClock</h2>
          <p>Name: {patientInfo.name}</p>
          <p>Condition: {patientInfo.condition}</p>
          <p>Total Medicines: {medicines.length}</p>
        </div>
      )}
    </div>
  );
}

export default MediClockApp;
