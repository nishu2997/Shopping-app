import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { AppContextProvider } from "./contexts/AppContext";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
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
      <Route path='/signin'>
        <div className='signin-form-container'>
          <div className='signin-form-inner-container'>
            <SignIn />
          </div>
        </div>
      </Route>
    </AppContextProvider>
  );
};

export default App;
