import React, { useState } from "react";
// import PropTypes from "prop-types";
// import "./Login.css";

async function loginUser(email, password) {
  return fetch("http://localhost:42001/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email, password),
  }).then(async (res) => {
    if (res.status === 200) {
      const data = await res.json();
      if (
        data &&
        data.tokens &&
        data.tokens.access &&
        data.tokens.access.token
      ) {
        const token = data.tokens.access.token;
        localStorage.setItem("token", token);
        return token;
      }
    } else {
      return res.text().then((error) => {
        console.log("error", error);
        return {
          message: error,
        };
      });
    }
  });
}

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // const [token, seToken] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    // setToken(tokens);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};
export default Login;
