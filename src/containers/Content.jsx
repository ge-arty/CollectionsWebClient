import React from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Routes, Route } from "react-router-dom";
import Explore from "./Explore";
import PersonalCollection from "./PersonalCollection";

export default function Content({ setToken, setIsLogged, setLoggedUserId }) {
  return (
    <div className="container ">
      <Routes>
        <Route exact path="/" element={<Explore />} />
        <Route
          path="/login"
          element={
            <LoginForm
              setToken={setToken}
              setIsLogged={setIsLogged}
              setLoggedUserId={setLoggedUserId}
            />
          }
        />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/myCollection" element={<PersonalCollection />} />
      </Routes>
    </div>
  );
}
