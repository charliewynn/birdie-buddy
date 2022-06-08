import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Post } from "./services/network";

function App() {
  const [info, setInfo] = useState("Click 'test api' to test a response");
  const testApi = async () => {
    console.log("Testing api");
    setInfo("testing...");
    try {
      const resp = await Post("authentication", "Login");
      console.log("resp", resp);
      setInfo(resp.message);
    } catch (error) {
      setInfo("Failed: " + error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => testApi()}>test api</button>
      <div>{info}</div>
    </div>
  );
}

export default App;
