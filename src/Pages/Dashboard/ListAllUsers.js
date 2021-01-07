import React, { useEffect, useState } from "react";
import { Api, useUsers } from "./Api";

// import { Link } from "react-router-dom";

const ListAllUsers = ({ isDarkMode }) => {
  const { loading: loadingUsers, data: users, error: errorUsers } = useUsers();
  console.log({ users });

  // const [loading, setLoading] = useState(true);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   async function fetchData() {
  //     const usersList = await Api.getUsers();
  //     if (mounted) {
  //       setLoading(false);
  //     }
  //     console.log("test", usersList[0].role);
  //     setUsers(usersList);
  //   }
  //   fetchData();
  // }, []);
  if (!users) {
    return "loading...";
  }

  return (
    <div>
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
