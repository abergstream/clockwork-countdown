import React from "react";
import styles from "./Nav.module.css";
const Nav = () => {
  return (
    <nav className={styles.container}>
      <button className={styles.logo}>CC</button>
    </nav>
  );
};

export default Nav;
