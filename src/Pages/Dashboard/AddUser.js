import React, { useState } from "react";
import { Link } from "react-router-dom";
const AddUser = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <input
          type="text"
          placeholder="user"
          onChange={({ target }) => setRole(target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddUser;
