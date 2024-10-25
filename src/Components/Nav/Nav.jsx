import React from "react";
import styles from "./Nav.module.css";
import { AnimatePresence, motion } from "framer-motion";
const Nav = ({ toggleNav, setToggleNav, startPath, setStartPath }) => {
  const variants = {
    open: {
      x: 0,
      y: 0,
      width: "100%",
      height: "100svh",
      backgroundColor: "rgba(0,0,0,.90)",
      borderRadius: 0,
      transition: {
        ease: "easeOut",
        duration: 0.25,
        staggerChildren: 0.07,
        delayChildren: 0.1,
      },
    },
    closed: {
      x: 13,
      y: 13,
      width: 0,
      height: 0,
      borderRadius: "5px",
      backgroundColor: "#000",
      transition: {
        duration: 0.25,
        staggerChildren: 0.05,
        delay: 0.1,
      },
    },
  };
  const variantsChildren = {
    open: {
      y: 0,
      x: 0,
      fontSize: "2.4rem",
      filter: "blur(0)",
    },
    closed: {
      x: -50,
      y: "-200%",
      fontSize: ".5rem",
      filter: "blur(2px)",
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
                  // Prevents for chosing same path as is aldready set
                  if (buttonDestinations[index] != startPath) {
                    setStartPath(button);
                    setToggleNav(false);
                  }
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
