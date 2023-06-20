import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Routes, Route } from "react-router-dom";
import Explore from "./Explore";
import PersonalCollection from "./PersonalCollection";

export default function Content() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Explore />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/myCollection" element={<PersonalCollection />} />
      </Routes>
    </div>
  );
}
