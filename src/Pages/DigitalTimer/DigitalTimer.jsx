import React, { useEffect, useState } from "react";
import ButtonAbort from "../../Components/Buttons/Buttons";
import styles from "./DigitalTimer.module.css";
import { AnimatePresence, motion } from "framer-motion";
const DigitalTimer = ({ timerFunctions }) => {
  const { timer } = timerFunctions;
  const hours = timer.getTimeValues().hours;
  const seconds = timer.getTimeValues().seconds;
  const minutes = timer.getTimeValues().minutes;
  const [secondsFirst, setSecondsFirst] = useState(
    seconds > 9 ? seconds.toString().substring(0, 1) : 0
  );
  const [secondsSecond, setSecondsSecond] = useState(
    seconds > 9
      ? seconds.toString().substring(1, 2)
      : seconds.toString().substring(0, 1)
  );
  const [minutesFirst, setMinutesFirst] = useState(
    hours == 0 ? (minutes > 9 ? minutes.toString().substring(0, 1) : 0) : 6
  );
  const [minutesSecond, setMinutesSecond] = useState(
    minutes > 9
      ? minutes.toString().substring(1, 2)
      : minutes.toString().substring(0, 1)
  );
  console.log("Minutes first: " + minutesFirst, hours, minutes);
  useEffect(() => {
    const firstNumber = seconds > 9 ? seconds.toString().substring(0, 1) : 0;
    const secondNumber =
      seconds > 9
        ? seconds.toString().substring(1, 2)
        : seconds.toString().substring(0, 1);
    setSecondsFirst(firstNumber);
    setSecondsSecond(secondNumber);
  }, [seconds]);
  useEffect(() => {
    const firstNumber =
      hours == 0 ? (minutes > 9 ? minutes.toString().substring(0, 1) : 0) : 6;
    const secondNumber =
      minutes > 9
        ? minutes.toString().substring(1, 2)
        : minutes.toString().substring(0, 1);
    setMinutesFirst(firstNumber);
    setMinutesSecond(secondNumber);
  }, [seconds]);

  const variants = {
    closed: {
      rotateX: 360,
      zIndex: 2,
      opacity: [1, 1, 1, 1, 1, 1, 1, 0],
      filter: ["blur(0)", "blur(0)", "blur(2px)"],
    },
  };
  const variantsNumber = {
    closed: {
      opacity: [1, 1, 1, 1, 0, 0, 0],
    },
  };
  return (
    <div className="container">
      <div className={styles.textTimer}>
        <div className={styles.flipBoxContainer}>
          <AnimatePresence>
            <motion.div
              key={`firstMin${minutesFirst}`}
              initial={{ x: 35, zIndex: 0, backgroundColor: "#e4ecf5" }}
              animate={{ x: 35, zIndex: 1 }}
              exit="closed"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeIn" }}
              className={styles.flipBox}
            >
              <motion.div
                exit="closed"
                variants={variantsNumber}
                className={styles.test}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {minutesFirst}
              </motion.div>
            </motion.div>
            <motion.div
              key={`secondMin${minutesSecond}`}
              initial={{ x: 110, zIndex: 0, backgroundColor: "#e4ecf5" }}
              animate={{ x: 110, zIndex: 1 }}
              exit="closed"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeIn" }}
              className={styles.flipBox}
            >
              <motion.div
                exit="closed"
                variants={variantsNumber}
                className={styles.test}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {minutesSecond}
              </motion.div>
            </motion.div>
            <motion.div
              key={`first${secondsFirst}`}
              initial={{ x: 190, zIndex: 0, backgroundColor: "#e6f0de" }}
              animate={{ x: 190, zIndex: 1 }}
              exit="closed"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
              className={styles.flipBox}
            >
              <motion.div
                exit="closed"
                variants={variantsNumber}
                className={styles.test}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {secondsFirst}
              </motion.div>
            </motion.div>
            <motion.div
              key={secondsSecond}
              initial={{ x: 265, zIndex: 0, backgroundColor: "#e6f0de" }}
              animate={{ x: 265, zIndex: 1 }}
              exit="closed"
              variants={variants}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className={styles.flipBox}
            >
              <motion.div
                exit="closed"
                variants={variantsNumber}
                className={styles.test}
                transition={{ duration: 0.5 }}
              >
                {secondsSecond}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ButtonAbort timerFunctions={timerFunctions} />
    </div>
  );
};

export default DigitalTimer;
