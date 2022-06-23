import "../../styles/Authentication/SignUp.scss";
import * as Authentication from "../../services/Authentication";
import { useState } from "react";

function SignUp({ doCreateUser }) {
  const randomPrefix = Math.floor(Math.random() * 500000);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("bb_testing" + randomPrefix);
  const [password, setPassword] = useState("TestingPassword123!@#");
  const [email, setEmail] = useState(`bb_test${randomPrefix}@cwynn.com`);

  const validateNewUserInfo = (username, password, email) => {
    if (username.length < 4) {
      throw Error("Username must be at least 4 characters long");
    }
  };
  const createUser = async () => {
    setError(null);
    try {
      validateNewUserInfo(username, password, email);
      const signUpResult = await Authentication.SignUp(
        username,
        password,
        email
      );
      console.log("Sign up result", signUpResult);
      //setCurrentSignUpUser(signUpResult.user);
    } catch (error) {
      console.error("Could not sign up", error);
      setError(error.message);
    }
  };
  const renderUserNamePasswordEmailInputs = () => {
    return (
      <div className="SignUp">
        <input
          placeholder="username"
          type="text"
          onChange={(newUsernameEvent) =>
            setUsername(newUsernameEvent.target.value)
          }
          value={username}
        />
        <input
          placeholder="password"
          type="text"
          onChange={(newPasswordEvent) =>
            setPassword(newPasswordEvent.target.value)
          }
          value={password}
        />
        <input
          placeholder="email@email.com"
          type="text"
          onChange={(newEmailEvent) => setEmail(newEmailEvent.target.value)}
          value={email}
        />
        <button onClick={createUser}>Create User</button>
      </div>
    );
  };
  let currentStep;

  if (true) {
    currentStep = renderUserNamePasswordEmailInputs();
  }

  return (
    <div>
      {currentStep}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default SignUp;
