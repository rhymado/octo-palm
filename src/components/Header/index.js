import React, { Component } from "react";
import menuIcon from "../../assets/menu-icon.svg";

import styles from "../../styles/home.module.css";

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className={`${styles["header-title"]} ${styles["pointer"]}`}>Amanda Kerr</h1>
        <nav>
          <img
            className={`${styles["pointer"]} ${styles["menu"]}`}
            src={menuIcon}
            alt="menu-icon"
          />
          <ul>
            <li className={`${styles["pointer"]} ${styles["active"]}`}>Home</li>
            <li className={`${styles["pointer"]}`}>Projects</li>
            <li className={`${styles["pointer"]}`}>Contacts</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
