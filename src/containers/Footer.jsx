import React from "react";

export default function Footer() {
  return (
    <footer
      className="d-flex justify-content-center align-items-center"
      style={{
        borderTop: "1px solid #fff",
        boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
      }}
    >
      <h3 className="m-3" style={{ color: "#FFF" }}>
        Powered By this Guy
      </h3>
      <a
        style={{ fontSize: "32px" }}
        href="https://www.linkedin.com/in/george-arutinyan/"
      >
        George Arutinyan
      </a>
    </footer>
  );
}