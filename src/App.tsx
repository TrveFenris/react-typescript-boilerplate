import React from "react";
import "./App.css";
import logo from "./logo.svg";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React + TypeScript + Webpack + Babel boilerplate</p>
      </header>
    </div>
  );
}

export default App;
