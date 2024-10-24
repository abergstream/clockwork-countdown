import React from "react";
import styles from "./Nav.module.css";
import { AnimatePresence, motion } from "framer-motion";
const Nav = ({ toggleNav, setToggleNav, startPath, setStartPath }) => {
  const variants = {
    open: {
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.25,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        duration: 0.25,
        staggerChildren: 0.05,
        delay: 0.1,
      },
    },
  };
  const variantsChildren = {
    open: {
      x: 0,
      filter: "blur(0)",
    },
    closed: {
      x: "-200%",
      filter: "blur(5px)",
    },
  };
  const buttonDestinations = ["/analogTimer", "/digitalTimer", "/textTimer"];
  const buttonTitles = ["ANALOG TIMER", "DIGITAL TIMER", "TEXT TIMER"];
  return (
    <AnimatePresence>
      {toggleNav && (
        <motion.div
          key={toggleNav}
          initial="closed"
          animate="open"
          exit="closed"
          className={styles.container}
          variants={variants}
        >
          {buttonDestinations.map((button, index) => {
            return (
              <motion.button
                key={button}
                className={styles.navItem}
                variants={variantsChildren}
                whileTap={{ scale: 0.97 }}
                style={{
                  textDecoration:
                    buttonDestinations[index] == startPath ? "underline" : "",
                }}
                onClick={() => {
                  setStartPath(button);
                  setToggleNav(false);
                }}
              >
                {buttonTitles[index]}
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Nav;
