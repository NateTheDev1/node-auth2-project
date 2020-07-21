import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [formValues, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  function handleSubmit() {
    axios
      .post("http://localhost:5000/api/auth/login", formValues)
      .then((res) => {
        localStorage.setItem("token_new", res.data.token);
        history.push("/private");
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "25vh",
        width: "50%",
        margin: "0 auto",
        flexDirection: "column",
      }}
    >
      <h1>Login</h1>
      {error.length > 0 && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        placeholder="username"
        value={formValues.username}
        onChange={(e) => setForm({ ...formValues, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="password"
        value={formValues.password}
        onChange={(e) => setForm({ ...formValues, password: e.target.value })}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;
