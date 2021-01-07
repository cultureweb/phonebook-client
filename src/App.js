import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";

// ThemeContext for darkmode
import { ThemeContext } from "./contexts/Context";

// Pages
import Login from "./Pages/Login/Login";

import Dashboard from "./Pages/Dashboard/Dashboard";
import AddNumber from "./Pages/Dashboard/AddNumber";
import NotFound from "./Pages/Notfound/NotFound";
import Page401 from "./Pages/ErrorPages/Page401";
import Page403 from "./Pages/ErrorPages/Page403";
import Page404 from "./Pages/ErrorPages/Page404";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signOut = () => {
    console.log("Signout");
    setIsLoggedIn(false);
    history.push("/login");
  };

  return (
    <ThemeContext.Provider value="dark-mode">
      <div className="App">
        <Router history={history}>
          {!isLoggedIn ? (
            <>
              {/* <Login /> */}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Login setIsLoggedIn={setIsLoggedIn} />}
                />
                {/* <Route exact path="/" component={Login} /> */}
              </Switch>
            </>
          ) : (
            <>
              {/* <Dashboard signOut={signOut} /> */}
              {/* <h5>Logged</h5>
              <span onClick={signOut}>Sign out</span> */}

              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Dashboard signOut={signOut} />}
                />
                <Route exact path="/401" component={Page401} />
                <Route exact path="/403" component={Page403} />
                <Route exact path="/404" component={Page404} />
                <Route exact path="/add-number" component={AddNumber} />
                <Route exact path="/*" component={NotFound} />
              </Switch>
            </>
          )}
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
