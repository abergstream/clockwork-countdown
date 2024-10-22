import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./TimesUp.module.css";
import { useNavigate } from "react-router-dom";
const TimesUp = ({ timerFunctions }) => {
  const { setIsPause } = timerFunctions;

  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <div className={styles.container}>
        <h2 className={styles.timesUpTitle}>Times up!</h2>
        <button
          className={styles.leaveTimesUpButton}
          onClick={() => {
            setIsPause(false);
            navigate("/timerStart");
          }}
        >
          SET NEW TIMER
        </button>
        <img className={styles.pauseIcon} src="pauseIcon.svg" />
      </div>
    </AnimatePresence>
  );
};

export default TimesUp;
