import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./TimerStart.module.css";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight, mdiClose } from "@mdi/js";
import { useNavigate } from "react-router-dom";
const TimerStart = ({
  timerValue,
  setTimerValue,
  intervalMode,
  setIntervalMode,
  pauseMode,
  setPauseMode,
  startTimer,
  startPath,
}) => {
  const [direction, setDirection] = useState("");
  const navigate = useNavigate();
  const decreaseTimerValue = () => {
    if (timerValue > 1) {
      setDirection("left");
      setTimeout(() => {
        setTimerValue(timerValue - 1);
      }, 5);
    }
  };
  const increaseTimerValue = () => {
    if (timerValue < 60) {
      setDirection("right");
      setTimeout(() => {
        setTimerValue(parseInt(timerValue + 1));
      }, 5);
    }
  };
  return (
    <>
      <div className={styles.timeWrapper}>
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              x: direction === "right" ? "50%" : "-150%",
              y: "-50%",
            }}
            animate={{ opacity: 1, x: "-50%", y: "-50%" }}
            exit={{
              opacity: 0,
              x: direction === "right" ? "-100%" : "0%",
              y: "-50%",
            }}
            transition={{ duration: 0.1 }}
            key={timerValue}
            className={styles.minutes}
          >
            {timerValue}
          </motion.div>
        </AnimatePresence>
        <button
          className={styles.buttonTime}
          onClick={decreaseTimerValue}
          disabled={timerValue === 1}
        >
          <Icon path={mdiChevronLeft} size={3} />
        </button>
        <div className={styles.minutesText}>minutes</div>
        <button
          className={styles.buttonTime}
          onClick={increaseTimerValue}
          disabled={timerValue === 60}
        >
          <Icon path={mdiChevronRight} size={3} />
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className={styles.container}
      >
        <div className={styles.checkboxContainer}>
          <input
            className={styles.checkbox}
            id="intervalMode"
            type="checkbox"
            checked={intervalMode}
            onChange={() => {
              if (intervalMode) {
                setPauseMode(false);
              }
              setIntervalMode((prev) => !prev);
            }}
          />
          <label className={styles.checkboxLabel} htmlFor="intervalMode">
            <div className={styles.dummyBox}>
              <Icon path={mdiClose} size={1.5} />
            </div>
            Intervals
          </label>
        </div>
        <div className={styles.checkboxContainer}>
          <input
            className={styles.checkbox}
            id="pauseMode"
            type="checkbox"
            checked={pauseMode}
            disabled={!intervalMode}
            onChange={() => setPauseMode((prev) => !prev)}
          />
          <label className={styles.checkboxLabel} htmlFor="pauseMode">
            <div className={styles.dummyBox}>
              <Icon path={mdiClose} size={1.5} />
            </div>
            5 min break / interval
          </label>
        </div>
        <button
          className={styles.startTimerButton}
          onClick={() => {
            startTimer();
            navigate(startPath ? startPath : "/analogTimer");
          }}
        >
          START TIMER
        </button>
      </motion.div>
    </>
  );
};

export default TimerStart;
