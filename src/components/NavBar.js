import React from "react";
import { Link } from "react-router-dom";

import "./Styles/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/" className="Logo">
        &lt;Todo /&gt;
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
