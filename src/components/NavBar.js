import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Styles/NavBar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [d_none, setD_none] = useState(false);

  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  useEffect(() => {
    if (windowDimensions.width < 720) {
      if (!showMenu) {
        const timer = setTimeout(() => {
          setD_none(true);
        }, 450);
        return () => clearTimeout(timer);
      } else {
        setD_none(false);
      }
    }
  }, [showMenu]);

  return (
    <nav>
      <div className="menu_header">
        <Link to="/" className="Logo">
          &lt;Todo /&gt;
        </Link>

        <div onClick={() => setShowMenu(!showMenu)} className="menu_toggler">
          {showMenu ? (
            <i className="las la-times"></i>
          ) : (
            <i className="las la-bars"></i>
          )}
        </div>
      </div>

      <div
        className={`menuItems ${
          windowDimensions.width < 720 && showMenu
            ? "menuItems-shown"
            : "menuItems-hidden"
        } `}
        style={{ display: d_none ? "none" : "flex" }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;
