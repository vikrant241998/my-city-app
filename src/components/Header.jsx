import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Header.module.css";
import header_Logo from "../assets/icons/header_Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current path

  const links = [
    { label: "Home", path: "/" },
    { label: "App overview", path: "/overview" },
    { label: "Audience", path: "/audience" },
    { label: "Why Choose", path: "/why-choose-us" },
    { label: "Pricing Tiers", path: "/pricing" },
    { label: "Contact Us", path: "/contact-us" },
    { label: "Footer", path: "/footer" },
  ];

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerIcon}>
        <img src={header_Logo} alt="header_Logo" />
      </div>

      <div
        className={styles.menuToggle}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✖" : "☰"}
      </div>

      <div className={`${styles.headerMenu} ${isMenuOpen ? styles.show : ""}`}>
        <ul>
          {links.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={
                  location.pathname === path ? styles.active : ""
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
