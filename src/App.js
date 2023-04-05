import React from 'react';
import { useSelector } from 'react-redux';
import Initialization from './components/Initialization';
import PasswordSetup from './components/PasswordSetup';
import Login from './components/Login';
import SecretDisplay from './components/SecretDisplay';
import "./App.css";

function App() {
  const initialized = useSelector((state) => state.extension.initialized);
  const loggedIn = useSelector((state) => state.extension.loggedIn);
  const passwordSet = useSelector((state) => state.extension.password);

  if (!initialized) {
    return <Initialization />;
  } else if (!passwordSet) {
    return <PasswordSetup />;
  } else if (!loggedIn) {
    return <Login />;
  } else {
    return <SecretDisplay />;
  }
}

export default App;
