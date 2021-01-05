import React from "react";
import { Link } from "react-router-dom";

const ListAllNumbers = ({ isDarkMode }) => {
  return (
    <div>
      <Link to="/add-number">
        <p className={isDarkMode ? "light-mode" : ""}>Add number</p>
      </Link>
      <h2 className={isDarkMode ? "light-mode" : ""}> Phone numbers</h2>
      <table style={{ margin: "0 auto", padding: "50px" }}>
        <thead>
          <tr>
            <th className={isDarkMode ? "light-mode" : ""}>Name</th>
            <th className={isDarkMode ? "light-mode" : ""}>Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={isDarkMode ? "light-mode" : ""}>Foo Bar</td>
            <td className={isDarkMode ? "light-mode" : ""}>999888777</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ListAllNumbers;
