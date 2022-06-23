import SignUp from "../../Components/Authentication/SignUp";

import { useSelector, useDispatch } from "react-redux";
import { setUser, logUserOut } from "../../Redux/AuthSlice";

function SignUpRoute() {
  const user = useSelector((state) => {
    return state.authReducer.user;
  });
  const dispatch = useDispatch();

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
      <SignUp />
    </div>
  );
}

export default SignUpRoute;
