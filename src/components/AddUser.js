import React, { useState } from "react";
import UserDataService from "../services/UserService";
import { Link } from "react-router-dom";

const AddUser = () => {
  const initialUserState = {
    id: null,
    name: "",
    email: "",
    password: "",
    role: "",
    published: false,
  };
  const [user, setUser] = useState(initialUserState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveUser = () => {
    var data = {
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role,
    };

    UserDataService.create(data)
      .then((response) => {
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          password: response.data.password,
          role: response.data.role,
          published: response.data.published,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newUser = () => {
    setUser(initialUserState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      <h1>Create a new user</h1>
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newUser}>
            Add
          </button>
          <Link to="/">View userList</Link>
        </div>
      ) : (
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              value={user.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              required
              value={user.email}
              onChange={handleInputChange}
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              required
              value={user.password}
              onChange={handleInputChange}
              name="password"
            />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              required
              value={user.role}
              onChange={handleInputChange}
              name="role"
            />
          </div>

          <button onClick={saveUser} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
