import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./TimerStart.module.css";
import Icon from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { useNavigate } from "react-router-dom";
const TimerStart = ({
  timerValue,
  setTimerValue,
  intervalMode,
  setIntervalMode,
  pauseMode,
  setPauseMode,
  startTimer,
  isPause,
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
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
          <Icon path={mdiChevronLeft} size={2} />
        </button>
        <div className={styles.minutesText}>minutes</div>
        <button
          className={styles.buttonTime}
          onClick={increaseTimerValue}
          disabled={timerValue === 60}
        >
          <Icon path={mdiChevronRight} size={2} />
        </button>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={intervalMode}
            onChange={() => setIntervalMode(!intervalMode)}
          />
          Intervals {isPause && "hej"}
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={pauseMode}
          onChange={() => setPauseMode(!pauseMode)}
        />{" "}
        5 min break / interval
      </div>
      <button
        onClick={() => {
          startTimer();
          navigate("/analogTimer");
        }}
      >
        START TIMER
      </button>
    </motion.div>
  );
};

export default TimerStart;
