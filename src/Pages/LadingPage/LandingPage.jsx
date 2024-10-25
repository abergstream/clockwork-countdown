import React, { useState } from "react";
import styles from "./LandingPage.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const variants = {
    closed: { width: "fit-content" },
    open: { width: 0 },
  };

  const handleClick = () => {
    const DELAY_MS = 2000;
    setIsClicked(true);
    setTimeout(() => navigate("./timerStart"), DELAY_MS);
  };

  return (
    <>
      <motion.div
        initiate={{ opacity: 1 }}
        animate={{ opacity: isClicked ? 0 : 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className={styles.container}
      >
        <motion.h3
          onClick={handleClick}
          className={styles.logo}
          animate={{ opacity: isClicked ? 0 : 1 }}
          transition={{ delay: 0.75, duration: 0.75 }}
        >
          <span className={styles.firstLetter}>C</span>
          <motion.div
            initial={"closed"}
            animate={isClicked ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5, easing: "easeOut" }}
            className={styles.logoName}
          >
            lockwork
          </motion.div>
          <span className={styles.firstLetter}>C</span>

          <motion.div
            initial={"closed"}
            animate={isClicked ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5, easing: "easeOut" }}
            className={styles.logoName}
          >
            ountdown
          </motion.div>
        </motion.h3>
        <motion.div
          className={styles.text}
          animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5, easing: "easeOut" }}
          onClick={handleClick}
        >
          For all your timing needs
        </motion.div>
      </motion.div>
    </>
  );
};

export default LandingPage;
