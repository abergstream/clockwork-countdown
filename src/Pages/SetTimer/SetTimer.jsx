import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./SetTimer.module.css";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight, mdiClose } from "@mdi/js";
import { useNavigate } from "react-router-dom";
window.oncontextmenu = (event) => {
  event.preventDefault();
  event.stopPropagation();
  return false;
};
const SetTimer = ({
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
  const [trigger, setTrigger] = useState(0);
  const navigate = useNavigate();
  const intervalRef = useRef(null);
  const holdTimeoutRef = useRef(null);
  // useLayoutEffect instead of useEffect to make the animation animate correct
  useLayoutEffect(() => {
    if (direction === "left" && timerValue > 1) {
      setTimerValue((prev) => prev - 1);
    } else if (direction === "right" && timerValue < 60) {
      setTimerValue((prev) => prev + 1);
    }
  }, [direction, trigger]);

  const updateTimerValue = (change) => {
    setDirection(change < 1 ? "left" : "right");
    setTrigger((prev) => prev + 1);
  };

  const handleValueChange = (direction, hold) => {
    const change = direction === "increase" ? 1 : -1;
    if (hold) {
      holdTimeoutRef.current = setTimeout(() => {
        intervalRef.current = setInterval(() => {
          updateTimerValue(change);
        }, 50);
      }, 500); // 500ms hold delay
    } else {
      // Clear hold timeout if not holding
      clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;

      updateTimerValue(change);
    }
  };

  const releaseButton = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      // Clear hold timeout if the button is released
      clearTimeout(holdTimeoutRef.current);
      holdTimeoutRef.current = null;
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
          // onClick in case you click for less than 100ms
          onClick={() => handleValueChange("decrease")}
          onTouchStart={() => handleValueChange("decrease", "hold")}
          onTouchEnd={releaseButton}
          disabled={timerValue === 1}
        >
          <Icon path={mdiChevronLeft} size={3} />
        </button>
        <div className={styles.minutesText}>minutes</div>
        <button
          className={styles.buttonTime}
          // onClick in case you click for less than 100ms
          onClick={() => handleValueChange("increase")}
          onTouchStart={() => handleValueChange("increase", "hold")}
          onTouchEnd={releaseButton}
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
        <motion.button
          className={styles.startTimerButton}
          whileTap={{ scale: 0.97 }}
          transition={{ ease: "easeOut", duration: 0.15 }}
          onClick={() => {
            startTimer();
            navigate(startPath ? startPath : "/analogTimer");
          }}
        >
          START TIMER
        </motion.button>
      </motion.div>
    </>
  );
};

export default SetTimer;
