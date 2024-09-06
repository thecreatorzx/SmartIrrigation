import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import "./styles.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { auth } from "./auth/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return <>{!authUser ? <LandingPage /> : <MainPage />}</>;
}

export default App;
