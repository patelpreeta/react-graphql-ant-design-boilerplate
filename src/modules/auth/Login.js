import { useContext } from "react";
import { Redirect } from "react-router-dom";

//! User Files

import { AppContext } from "AppContext";

const Login = () => {
  const { state } = useContext(AppContext);

  if (state.authenticated) return <Redirect to="/" />;
  return <div>LOGIN</div>;
};

export default Login;
