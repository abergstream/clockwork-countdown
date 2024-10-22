import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { AnimatePresence, motion } from "framer-motion";
const Header = ({ location, intervalMode, setStartPath }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const getTimerMode = () => {
    if (location.pathname === "/timerStart") {
      return "";
    }
    return intervalMode ? "interval" : "timer";
  };
  return (
    <div className={styles.container}>
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
        <AnimatePresence>
          {!toggleNav && (
            <motion.img
              key="navi"
              className={styles.navIcon}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: [1, 0] }}
              src="/navicon.svg"
            />
          )}
          {toggleNav && (
            <motion.img
              key="navi-white"
              className={styles.navIcon}
              initial={{ opacity: [0, 1] }}
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: [1, 0] }}
              src="/navicon-white.svg"
            />
          )}
        </AnimatePresence>
      </button>
      <h1 className={styles.headerTitle}>{getTimerMode()}</h1>
    </div>
  );
};

export default Header;
