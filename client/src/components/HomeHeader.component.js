import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../componentsStyles/Header.module.css";

function Header(props) {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className={styles.header}>
      <div className={styles.navitems}>
        <div className={styles.logo}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            HOME
          </Link>
        </div>
        <div className={styles.navlinks2}>
          {location.pathname === "/login" ||
          location.pathname === "/register" ? (
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Take Test
            </Link>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              {props.setloggedin ? "Profile" : "Register/Login"}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
