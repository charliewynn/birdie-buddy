import logo from "./logo.svg";
import "./styles/App.scss";
import SignUpRoute from "./Routes/Authentication/SignUpRoute";
import ApiTestRoute from "./Routes/Test/ApiTestRoute";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setUser, logUserOut } from "./Redux/AuthSlice";

function App() {
  const user = useSelector((state) => {
    return state.authReducer.user;
  });
  const dispatch = useDispatch();
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
          {user && (
            <button
              onClick={() => {
                dispatch(logUserOut());
              }}
            >
              clearUser
            </button>
          )}
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
