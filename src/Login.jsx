import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import React from "react";

export default function Login() {
  const authContext = React.useContext(AuthContext);
  const navigate = useNavigate();

  const login = () => {
    authContext.setToken("fake-token");
    navigate("/page-1");
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </>
  );
}
