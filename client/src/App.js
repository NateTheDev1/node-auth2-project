import React from "react";
import { Switch, Link, Route, useHistory } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  const history = useHistory();
  return (
    <div>
      <h1>User DB</h1>
      <Switch>
        <Route exact path="/login" component={Login} />

        <Route exact path="/home">
          <Link to="/login">Login</Link>
          <br />
          <Link to="/register">Register</Link>
          <button onClick={() => localStorage.removeItem("token_new")}>
            Logout
          </button>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
