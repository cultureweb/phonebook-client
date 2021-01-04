import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import fire from "./fire.js";
import Login from "./auth/Login";
import ListAllNumbers from "./components/Phonebook/ListAllNumbers";
import AddNumber from "./components/Phonebook/AddNumber";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signOut = () => {
    fire.auth().signOut();
  };

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  return (
    <div className="App">
      <Router>
        {!isLoggedIn ? (
          <>
            <Switch>
              <Route path="/">
                <Login />
              </Route>
            </Switch>
          </>
        ) : (
          <>
            <h1>Hello World!</h1>
            <span onClick={signOut}>
              <a href="#">Sign out</a>
            </span>
            <Switch>
              <Route path="/add-number">
                <AddNumber />
              </Route>
              <Route path="/">
                <ListAllNumbers />
              </Route>
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}
export default App;
