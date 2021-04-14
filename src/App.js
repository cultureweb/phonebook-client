import React, { useState } from "react";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";

// ThemeContext for darkmode
import { ThemeContext } from "./contexts/Context";

// Pages
import Login from "./auth/Login";
import Home from "./Pages/Home/Home";
import AddUser from "./components/User/AddUser";
import User from "./components/User/User";
import NotFound from "./Pages/Notfound/NotFound";
import Page401 from "./Pages/ErrorPages/Page401";
import Page403 from "./Pages/ErrorPages/Page403";
import Page404 from "./Pages/ErrorPages/Page404";

function App() {
  return (
    <ThemeContext.Provider value="dark-mode">
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            /> */}
            <Route exact path="/login" component={Login} />
            <Route exact path="/401" component={Page401} />
            <Route exact path="/403" component={Page403} />
            <Route exact path="/404" component={Page404} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
