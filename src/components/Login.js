import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/user";

import "./Styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="Login_container">
      <div className="usernameField">
        <label htmlFor="username">username:</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          placeholder="username..."
          type="text"
        />
      </div>
      <div className="emailField">
        <label htmlFor="email">email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="example@gmail.com"
          type="text"
        />
      </div>
      <button
        onClick={() => {
          const user = { username, email, todos: [] };
          dispatch(login(user));
        }}
        className="LoginBtn"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
