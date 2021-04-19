import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { AppContextProvider } from "./contexts/AppContext";
import "./App.css";
const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const handleSize = () => {
    setWindowSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  });
  return (
    <AppContextProvider value={{ window: { windowSize: windowSize } }}>
      <Header />
      <Body />
    </AppContextProvider>
  );
};

export default App;
