import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TimerPause.module.css";
import { motion } from "framer-motion";
const TimerPause = ({ timerFunctions }) => {
  const { timer, setIsPause, startPath } = timerFunctions;
  const minutes = timer.getTimeValues().minutes;
  const seconds = timer.getTimeValues().seconds;
  return (
    <div className={styles.container}>
      <h2 className={styles.pauseTitle}>Pause & breath</h2>
      <div className={styles.timeLeft}>
        {minutes}.{seconds}
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        transition={{ ease: "easeOut", duration: 0.15 }}
        className={styles.leavePauseButton}
        onClick={() => {
          timer.stop();
          setIsPause(false);
        }}
      >
        NO PAUSE, GO NOW!
      </motion.button>
      <img className={styles.pauseIcon} src="pauseIcon.svg" />
    </div>
  );
};

export default TimerPause;
