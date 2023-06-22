import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function RegisterForm() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
      <h1 style={{ color: "#fff" }}>Sign Up</h1>
      <form>
        <div className="form-group">
          <label style={{ color: "#FFF" }}>FirstName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter FirstName"
          />
        </div>
        <div className="form-group">
          <label style={{ color: "#FFF" }}>LastName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter LastName"
          />
        </div>
        <div className="form-group">
          <label style={{ color: "#FFF" }}>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label style={{ color: "#FFF" }}>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <p style={{ color: "red" }}>Here will be Error Message!</p>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <NavLink
            to="/register"
            className="btn btn-success"
            style={{ width: "100%" }}
          >
            Sign in
          </NavLink>
        </div>
      </form>
    </div>
  );
}
