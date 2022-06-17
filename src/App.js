import logo from "./logo.svg";
import "./styles/App.scss";
import { useState } from "react";
import { Post } from "./services/network";
import SignUpRoute from "./Routes/Authentication/SignUpRoute";
import ApiTestRoute from "./Routes/Test/ApiTestRoute";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/birdie-buddy">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Link className="App-link" to="/signup">
            Sign Up
          </Link>
        </header>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<ApiTestRoute />} />
            <Route path="signup" element={<SignUpRoute />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
