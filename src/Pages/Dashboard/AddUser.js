import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "./Api";

const AddUser = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    Api.createUser(name, email, password, role);
    console.log(`submitted: ${name} - ${email} -${password} -${role}`);
  };

  return (
    <div>
      <Link to="/">View userList</Link>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname Lastname"
          onChange={({ target }) => setName(target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="MySecretPassword"
          onChange={({ target }) => setPassword(target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="toto@bar.comm"
          onChange={({ target }) => setEmail(target.value)}
        />
        <br />
        <div>
          <label>
            User
            <input
              type="radio"
              id="user"
              name="role"
              value="user"
              checked={true}
              onChange={() => setRole("user")}
            />
          </label>
        </div>

        <div>
          <label>
            Admin
            <input
              type="radio"
              id="admin"
              name="role"
              value="admin"
              onChange={() => setRole("admin")}
            />
          </label>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddUser;
