import React, { useState } from "react";

import { ThemeContext } from "./context/context";
import LoginPage from "./pages/login";
import Home from "./pages/home";
import { useTranslation } from "react-i18next";

export default function App() {
  const [theme, setTheme] = useState(false);
  const [loggedIn, setLogin] = useState(false);
  const toggleTheme = () => setTheme(!theme);
  const handleLogin = (param) => {
    setLogin(param);
    window.location.reload();
  };
  const token = localStorage.getItem("token");

  return (
    <ThemeContext.Provider value={[theme, toggleTheme, handleLogin]}>
      {token === null && !loggedIn ? (
        <LoginPage handleLogin={handleLogin} />
      ) : (
        <Home />
      )}
    </ThemeContext.Provider>
  );
}
