import { useState } from "react";
import * as Authentication from "../../services/Authentication";
import SignUp from "../../Components/Authentication/SignUp";

import { useSelector, useDispatch } from "react-redux";
import { setUser, logUserOut } from "../../Redux/AuthSlice";

function SignUpRoute() {
  const user = useSelector((state) => {
    return state.authReducer.user;
  });
  const dispatch = useDispatch();
  const [currentSignUpUser, setCurrentSignUpUser] = useState(null);
  const createUser = async (username, password, email) => {
    try {
      const signUpResult = await Authentication.SignUp(
        username,
        password,
        email
      );
      console.log("Sign up result", signUpResult);
      setCurrentSignUpUser(signUpResult.user);
    } catch (error) {
      console.error("Could not sign up", error);
      alert(error.message);
    }
  };
  return (
    <div className="SignUpRoute">
      {JSON.stringify(user)}
      <button
        onClick={() => {
          dispatch(setUser({ charlie: "wynn" }));
        }}
      >
        setUser
      </button>
      <button
        onClick={() => {
          dispatch(logUserOut());
        }}
      >
        clearUser
      </button>
      <SignUp doCreateUser={createUser} />
    </div>
  );
}

export default SignUpRoute;
