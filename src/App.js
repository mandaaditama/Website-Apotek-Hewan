// App.js
import React, { useState } from "react";
import Home from "./components/Home"; // Pastikan path sesuai dengan folder komponen Anda
import Login from "./components/Login"; // Komponen Login
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
