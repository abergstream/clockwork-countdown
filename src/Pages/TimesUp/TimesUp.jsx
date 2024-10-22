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
        <motion.img
          animate={{
            transform: [
              "rotate(5deg) translate(-50%, -50%)",
              "rotate(-5deg) translate(-50%, -50%)",
              "rotate(5deg) translate(-50%, -50%)",
              "rotate(-5deg) translate(-50%, -50%)",
              "rotate(5deg) translate(-50%, -50%)",
            ],
            filter: ["blur(2px)", "blur(1px)", "blur(2px)"],
          }}
          transition={{ repeat: Infinity, ease: "linear", duration: 0.2 }}
          className={styles.timesUpIcon}
          src="alarmIcon.svg"
        />
      </div>
    </AnimatePresence>
  );
};

export default TimesUp;
