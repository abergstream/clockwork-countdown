import React from "react";
import styles from "./Nav.module.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { AnimatePresence, motion } from "framer-motion";
const Nav = ({ toggleNav, setToggleNav, startPath, setStartPath }) => {
  return (
    <AnimatePresence mode="wait">
      {toggleNav && (
        <motion.div
          key={toggleNav}
          initial={{ x: "-200%" }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-200%" }}
          transition={{ ease: "easeOut", duration: 0.25 }}
          className={styles.container}
        >
          <button
            className={styles.navItem}
            onClick={() => {
              setStartPath("/analogTimer");
              setToggleNav(false);
            }}
          >
            ANALOG TIMER
          </button>
          <button
            className={styles.navItem}
            onClick={() => {
              setStartPath("/digitalTimer");
              setToggleNav(false);
            }}
          >
            DIGITAL TIMER
          </button>
          <button
            className={styles.navItem}
            onClick={() => {
              setStartPath("/textTimer");
              setToggleNav(false);
            }}
          >
            TEXT TIMER
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Nav;
