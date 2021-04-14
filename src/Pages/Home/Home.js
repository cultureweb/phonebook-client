import React from "react";

import Dashboard from "../Dashboard/Dashboard";
import LandingPage from "../LandingPage/LandingPage";

import auth from "../../services/authService";

function Home() {
  const isAuthenticated = auth.isAuthenticated();
  return isAuthenticated ? <Dashboard /> : <LandingPage />;
}

export default Home;
