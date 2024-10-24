import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Header = ({ intervalMode, startPath, setStartPath }) => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState(false);

  const getTimerMode = () => {
    if (location.pathname === "/timerStart") {
      let title = "";
      for (let i = 1; i < startPath.length; i++) {
        title +=
          startPath[i] !== startPath[i].toUpperCase()
            ? startPath[i].toUpperCase()
            : ` ${startPath[i]}`;
      }
      return title;
    }
    return intervalMode ? "interval" : "timer";
  };
  return (
    <div className={styles.container}>
      <Nav
        toggleNav={toggleNav}
        setToggleNav={setToggleNav}
        startPath={startPath}
        setStartPath={setStartPath}
      />
      <motion.button
        whileTap={{ scale: 0.9, x: 1.55, y: 1.55 }}
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
      </motion.button>
      <h1 className={styles.headerTitle}>{getTimerMode()}</h1>
    </div>
  );
};

export default Header;
