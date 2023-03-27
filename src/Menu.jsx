import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import React from "react";

export default function Menu() {
  const authContext = React.useContext(AuthContext);
  const isAuthenticated = authContext.token;
  const navigate = useNavigate();

  const logout = () => {
    authContext.setToken(null);
    navigate("/login");
  };

  return isAuthenticated ? (
    <nav>
      <ul>
        <li>
          <Link to="/page-1">Page 1</Link>
        </li>
        <li>
          <Link to="/page-2">Page 2</Link>
        </li>
      </ul>
      <button onClick={logout}>Logout</button>
    </nav>
  ) : null;
}
