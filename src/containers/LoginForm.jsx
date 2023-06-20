import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="container min-w-25 d-flex justify-content-center align-items-center flex-column p-5"
      style={{
        maxWidth: "400px",
        border: "1px solid #fff",
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
        borderRadius: "50px",
      }}
    >
      <h1 style={{ color: "#fff" }}>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <p style={{ color: "red" }}>Here will be Error Message!</p>
        <div className="d-grid gap-2">
          <NavLink
            to="/register"
            className="btn btn-success"
            style={{ width: "100%" }}
          >
            Sign up
          </NavLink>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
