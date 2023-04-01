import React from "react";

import styles from "./Header.module.css";

type HeaderProps = {};

const Header: React.FunctionComponent<HeaderProps> = (props) => {
  return (
    <header className={styles.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
