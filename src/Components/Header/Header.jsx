import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
const Header = ({ startPath, setStartPath }) => {
  const [toggleNav, setToggleNav] = useState(false);
  return (
    <div className={styles.container}>
      {/* <h3>{startPath ? startPath : "/analogTimer"}</h3>
      <button
        onClick={() => {
          setStartPath("/analogTimer");
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setStartPath("/digitalTimer");
        }}
      >
        D
      </button>
      <button
        onClick={() => {
          setStartPath("/textTimer");
        }}
      >
        T
      </button> */}
      <Nav
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
        startPath={setStartPath}
        setStartPath={setStartPath}
      />
      <button
        className={styles.buttonNav}
        onClick={() => {
          setToggleNav((prev) => !prev);
        }}
      >
        <Icon
          path={mdiMenu}
          size={3}
          style={{ color: toggleNav ? "#FFF" : "#000" }}
        />
      </button>
    </div>
  );
};

export default Header;
