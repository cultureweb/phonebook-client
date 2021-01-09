import React, { useContext, useState } from "react";
import "./Dashboard.css";
import { ThemeContext } from "../../contexts/Context";
import ToggleTheme from "../../components/ToggleTheme";
import UsersList from "../../components/UsersList";
// import ListAllUsers from "./ListAllUsers";

const Dashboard = ({ signOut }) => {
  const themeMode = useContext(ThemeContext); //dark
  const [isDarkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? themeMode : ""}>
      <h5 className={isDarkMode ? "light-mode" : ""}>Logged</h5>
      <span onClick={signOut} className={isDarkMode ? "light-mode" : ""}>
        {" "}
        Sign out
      </span>
      <ToggleTheme
        lightMode="light-mode"
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
      <h1
        className={isDarkMode ? "light-mode" : ""}
        style={{ padding: "50px" }}
      >
        Dashboard
      </h1>
      {/* <ListAllUsers isDarkMode={isDarkMode} /> */}
      <UsersList />
    </div>
  );
};

export default Dashboard;
