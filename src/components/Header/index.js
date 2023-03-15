import React, { Component } from "react";
import menuIcon from "../../assets/menu-icon.svg";

// import styles from "../../styles/home.module.css";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="flex-[3] cursor-pointer select-none text-secondary font-semibold text-3xl">
          Amanda Kerr
        </h1>
        <nav>
          <img
            className="cursor-pointer select-none inline md:hidden h-7 w-7"
            src={menuIcon}
            alt="menu-icon"
          />
          <ul className="hidden md:flex gap-12 p-0 justify-end">
            <li className="cursor-pointer select-none border-b-2 border-solid border-primary">
              Home
            </li>
            <li className="cursor-pointer select-none hover:border-b-2 hover:border-solid hover:border-primary">
              Projects
            </li>
            <li className="cursor-pointer select-none hover:border-b-2 hover:border-solid hover:border-primary">
              Contacts
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
