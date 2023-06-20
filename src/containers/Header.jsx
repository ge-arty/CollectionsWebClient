import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link" href="/">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                My Collection
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Language change
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Theme change
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
