import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Routes, Route } from "react-router-dom";
import Explore from "./Explore";
import UserDashboard from "./UserDashboard";

export default function Content({
  setToken,
  setLoggedUserId,
  userData,
  loggedUserId,
}) {
  return (
    <div className="container content-main">
      <Routes>
        <Route exact path="/" element={<Explore />} />
        <Route
          path="/login"
          element={
            <LoginForm setToken={setToken} setLoggedUserId={setLoggedUserId} />
          }
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route
          path="/dashboard"
          element={
            <UserDashboard userData={userData} loggedUserId={loggedUserId} />
          }
        />
      </Routes>
    </div>
  );
}
