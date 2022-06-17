import { useState } from "react";
import * as Authentication from "../../services/Authentication";
import SignUp from "../../Components/Authentication/SignUp";

function SignUpRoute() {
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
      <SignUp doCreateUser={createUser} />
    </div>
  );
}

export default SignUpRoute;
