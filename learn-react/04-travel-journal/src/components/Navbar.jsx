import React from "react";
import earth from "../images/earth-icon.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar--icon" src={earth} />
      <p className="navbar--text">my travel journal.</p>
    </nav>
  );
}
