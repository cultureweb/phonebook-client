import React, { useState } from "react";
import { baseURL } from "../config/config";
import history from "../history";

// import PropTypes from "prop-types";

//const baseURL = "http://localhost:42001/api/v1";
//const baseURL = "https://phonebook-server-api.herokuapp.com/api/v1";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  async function loginUser(email, password) {
    return fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email, password),
    }).then(async (res) => {
      if (res.status !== 200) {
        const error = await res.json();
        return error;
      } else {
        const data = await res.json();
        if (
          data &&
          data.tokens &&
          data.tokens.access &&
          data.tokens.access.token
        ) {
          const token = data.tokens.access.token;
          localStorage.setItem("token", "Bearer " + token);
          return token;
        }
        setIsLoggedIn(true);
        history.push("/");
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await loginUser({
      email,
      password,
    });
    if (data && data.message) {
      setError(data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="username"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="current-password"
        />
        <br />
        <p>{error}</p>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default Login;
