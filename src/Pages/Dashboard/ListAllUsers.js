import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Api } from "./Api";
import useAsync from "react-use/lib/useAsync";

// import { Link } from "react-router-dom";

const ListAllUsers = ({ isDarkMode }) => {
  const { loading, value: users, error } = useAsync(Api.getUsers, []);

  if (loading) {
    return "loading...";
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Link to="/add-user">
        <p className={isDarkMode ? "light-mode" : ""}>Add a New User</p>
      </Link>
      <h2 className={isDarkMode ? "light-mode" : ""}>
        List of users in database
      </h2>{" "}
      <table style={{ margin: "0 auto", padding: "50px" }}>
        <thead>
          <tr>
            <th className={isDarkMode ? "light-mode" : ""}>role</th>
            <th className={isDarkMode ? "light-mode" : ""}>name</th>
            <th className={isDarkMode ? "light-mode" : ""}>email</th>
            <th className={isDarkMode ? "light-mode" : ""}>id</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className={isDarkMode ? "light-mode" : ""}>{user.role}</td>
              <td className={isDarkMode ? "light-mode" : ""}>{user.name}</td>
              <td className={isDarkMode ? "light-mode" : ""}>{user.email}</td>
              <td className={isDarkMode ? "light-mode" : ""}>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListAllUsers;
