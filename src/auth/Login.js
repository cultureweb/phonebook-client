import React, { useEffect, useState } from "react";
import authService from "../services/authService";

// import { baseURL } from "../config/config";
import { useHistory } from "react-router-dom";

// import PropTypes from "prop-types";

//const baseURL = "http://localhost:42001/api/v1";
//const baseURL = "https://phonebook-server-api.herokuapp.com/api/v1";

const Login = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  let history = useHistory();
  const { from } = props.location.state || { from: { pathname: "/" } };
  console.log("from", from);

  useEffect(() => {
    console.log("islogggg", authService.isAuthenticated());
    setIsLogged(authService.isAuthenticated());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    console.log("pathname before", from.pathname);
    e.preventDefault();
    authService.loginWithEmail(data).then(
      (res) => {
        // setUser(res.user);
        if (res && res.user) {
          console.log("ccc", res);
          localStorage.setItem("userId", res.user.id);
          localStorage.setItem("name", res.user.name);
          localStorage.setItem("role", res.user.role);
        }

        // if (from.pathname == "/login") {
        //   console.log("login to /", from.pathname);
        //   history.push("/");
        // } else {
        //   console.log("pathname", from.pathname);
        //   history.push(from.pathname);
        // }
        history.push("/");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
      }
    );
  };

  // async function loginUser(email, password) {
  //   return fetch(`${baseURL}/auth/login`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(email, password),
  //   }).then(async (res) => {
  //     if (res.status !== 200) {
  //       const error = await res.json();
  //       return error;
  //     } else {
  //       const data = await res.json();
  //       if (
  //         data &&
  //         data.tokens &&
  //         data.tokens.access &&
  //         data.tokens.access.token
  //       ) {
  //         const token = data.tokens.access.token;
  //         localStorage.setItem("token", "Bearer " + token);

  //         setIsLogged(true);
  //         return token;
  //       }

  //       history.push("/");
  //     }
  //   });
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = await loginUser({
  //     email,
  //     password,
  //   });
  //   if (data && data.message) {
  //     setError(data.message);
  //   }
  // };

  return (
    <div>
      <h2>Login</h2>
      {/* <form onSubmit={handleSubmit}> */}
      {/* <form onSubmit={loginEmail(data)}> */}

      <form onSubmit={handleFormSubmit}>
        <input
          value={data && data.email}
          type="text"
          name="email"
          // onChange={(e) => setEmail(e.target.value)}
          onChange={handleChange}
          placeholder="Email"
          autoComplete="username"
        />
        <br />
        <input
          value={data && data.password}
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password"
          autoComplete="current-password"
        />
        <br />
        {/* <p>{error}</p> */}
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default Login;
