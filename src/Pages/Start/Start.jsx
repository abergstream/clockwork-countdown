import React, { useState } from "react";
import styles from "./Start.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Start = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const variants = {
    closed: { width: "fit-content" },
    open: { width: 0 },
  };

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate("./timer");
    }, 2000);
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
          className={styles.logo}
          animate={{ opacity: isClicked ? 0 : 1 }}
          transition={{ delay: 0.75, duration: 0.75 }}
        >
          C
          <motion.div
            initial={"closed"}
            animate={isClicked ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.5, easing: "easeOut" }}
            className={styles.logoName}
          >
            lockwork
          </motion.div>
          C
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
        <motion.button
          animate={isClicked ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.5, easing: "easeOut" }}
          onClick={handleClick}
        >
          For all your timing needs
        </motion.button>
      </motion.div>
    </>
  );
};

export default Start;

{
  /* <div>
<div>
  <label>
    <input
      type="checkbox"
      checked={isIntervalMode}
      onChange={() => setIsIntervalMode(!intervals)}
    />
    Intervaller
  </label>
  <label>
    <input
      type="checkbox"
      checked={isPauseBetweenIntervals}
      onChange={() =>
        setIsPauseBetweenIntervals(!isPauseBetweenIntervals)
      }
    />{" "}
    Pause mellan intervaller
  </label>
</div>
{isPause && <h4> Pause</h4>}
<h3>{timer.getTimeValues().toString()}</h3>
</div> */
}
