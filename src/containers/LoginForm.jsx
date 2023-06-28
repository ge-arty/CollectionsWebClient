import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userLogin from "../API/userLogin";

export default function LoginForm({ setToken, setLoggedUserId }) {
  const [error, setError] = useState("");
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(accountInfo, setToken, setError, setLoggedUserId, navigate);
    setAccountInfo({
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="container min-w-25 d-flex justify-content-center align-items-center flex-column p-5  mt-5"
      style={{
        maxWidth: "400px",
        border: "1px solid #fff",
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
        borderRadius: "50px",
      }}
    >
      <h1>Login</h1>
      <form style={{ width: "300px" }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }} className="form-group">
          <label>Email</label>
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
          <label>Password</label>
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
        {error.length > 0 ? (
          <p className="text-danger">{error}</p>
        ) : (
          <p style={{ height: "20px" }}></p>
        )}
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
