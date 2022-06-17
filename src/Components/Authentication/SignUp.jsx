import "../../styles/Authentication/SignUp.scss";
import { useState } from "react";

function SignUp({ doCreateUser }) {
  const [username, setUsername] = useState("bb_testing");
  const [password, setPassword] = useState("TestingPassword123!@#");
  const [email, setEmail] = useState("bb_test@cwynn.com");
  const createUser = async () => {
    // TODO - validate these entries
    doCreateUser(username, password, email);
  };
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
}

export default SignUp;
