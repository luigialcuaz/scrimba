import React from "react";
import Logo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src={Logo} />
    </nav>
  );
}
