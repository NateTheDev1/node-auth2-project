import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <h1>User DB</h1>
      <Switch>
        <Route exact path="/">
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
        </Route>
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
