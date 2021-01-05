import React from "react";
import { ThemeContext } from "../contexts/Context";

const ToggleTheme = ({ toggleTheme, isDarkMode }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <div>
            <span>
              {isDarkMode ? <p style={{ color: "#fff" }}>moon</p> : <p>sun</p>}
            </span>
            <div onClick={context.toggleTheme}>
              <input
                type="checkbox"
                className="checkbox"
                onChange={toggleTheme}
              />
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ToggleTheme;
