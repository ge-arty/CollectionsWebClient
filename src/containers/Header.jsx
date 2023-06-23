import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import userLogout from "../API/userLogout";
import getUser from "../API/getUser";

export default function Header({ isLogged, token, userId, setIsLogged }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      style={{
        borderBottom: "1px solid #fff",
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
      }}
      className="navbar navbar-expand-lg navbar-dark pb-4 pt-4"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          myCollections
        </a>
        <button
          className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-center ${
            menuOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav w-50 d-flex justify-content-evenly">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Explore
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                onClick={() => getUser(userId, token)}
                className="nav-link"
                to="/myCollection"
              >
                My Collection
              </NavLink>
            </li>
            {isLogged ? (
              <>
                <li className="nav-item">
                  <a className="nav-link">Language change</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Theme change</a>
                </li>
                <li className="nav-item">
                  <button
                    onClick={() =>
                      userLogout(token, navigate, userId, setIsLogged)
                    }
                    className="nav-link"
                  >
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Language change</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Theme change</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
