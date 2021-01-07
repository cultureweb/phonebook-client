import React, { useState } from "react";
import fire from "../fire";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        setError("Incorrect username or password");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={({ target }) => setEmail(target.value)}
          placeholder="Email"
          autoComplete="username"
        />
        <br />
        <input
          type="password"
          onChange={({ target }) => setPassword(target.value)}
          placeholder="Password"
          autoComplete="current-password"
        />
        <br />
        {error && (
          <p>
            {error} <br />
          </p>
        )}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default Login;
