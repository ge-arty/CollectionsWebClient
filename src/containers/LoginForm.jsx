import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function LoginForm() {
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setAccountInfo({
      email: "",
      password: "",
    });
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
      <form style={{ width: "300px" }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }} className="form-group">
          <label style={{ color: "#FFF" }}>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={accountInfo.email}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, email: e.target.value })
            }
          />
        </div>
        <div style={{ marginBottom: "10px" }} className="form-group">
          <label style={{ color: "#FFF" }}>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={accountInfo.password}
            onChange={(e) =>
              setAccountInfo({ ...accountInfo, password: e.target.value })
            }
          />
        </div>
        <p style={{ color: "red" }}>Here will be Error Message!</p>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
          <NavLink
            to="/register"
            className="btn btn-success"
            style={{ width: "100%" }}
          >
            Sign up
          </NavLink>
        </div>
      </form>
    </div>
  );
}
