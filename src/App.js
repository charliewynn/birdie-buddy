import logo from "./logo.svg";
import "./styles/App.scss";
import { useState } from "react";
import { Post } from "./services/network";
import SignUpRoute from "./Routes/Authentication/SignUpRoute";
import ApiTestRoute from "./Routes/Test/ApiTestRoute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="content">
        <ApiTestRoute />
        <SignUpRoute />
      </div>
    </div>
  );
}

export default App;
