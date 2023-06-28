import React from "react";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import userRegister from "../API/userRegister";

export default function RegisterForm() {
  const [error, setError] = useState("");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userRegister(userInfo, setError, navigate);
    setUserInfo({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div
      className="container min-w-100 d-flex justify-content-center align-items-center flex-column p-5 mt-4 "
      style={{
        maxWidth: "500px",
        border: "1px solid #fff",
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
        borderRadius: "50px",
      }}
    >
      <h1>Sign Up</h1>
      <form style={{ width: "300px" }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }} className="form-group">
          <label>FirstName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter FirstName"
            value={userInfo.firstName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, firstName: e.target.value })
            }
          />
        </div>
        <div style={{ marginBottom: "10px" }} className="form-group">
          <label>LastName</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter LastName"
            value={userInfo.lastName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, lastName: e.target.value })
            }
          />
        </div>
        <div style={{ marginBottom: "10px" }} className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
        </div>
        <div style={{ marginBottom: "10px" }} className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={userInfo.password}
            onChange={(e) =>
              setUserInfo({ ...userInfo, password: e.target.value })
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
            Sign Up
          </button>
          <NavLink
            to="/login"
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
