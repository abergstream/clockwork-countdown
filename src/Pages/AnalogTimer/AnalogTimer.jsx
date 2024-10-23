import React, { useEffect, useState } from "react";
import styles from "./AnalogTimer.module.css";
import { motion } from "framer-motion";
import ButtonAbort from "../../Components/Buttons/Buttons";
// 6 * second
const AnalogTimer = ({ timerFunctions }) => {
  const { timer } = timerFunctions;

  const seconds = timer.getTimeValues().seconds;
  const minutes = timer.getTimeValues().minutes;

  // Added 1 / 2 to seconds / minutes to get the rotation to work :)
  const [secondRotation, setSecondRotation] = useState(270 + (seconds + 2) * 6);
  const [minuteRotation, setMinuteRotation] = useState(270 + (minutes + 1) * 6);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setSecondRotation((prev) => prev - 6);
    }

    return () => {
      isMounted = false;
    };
  }, [seconds]);

  useEffect(() => {
    setMinuteRotation(270 + (minutes + 1) * 6);
  }, [minutes]);
  const test = "hyejhej";
  return (
    <div className="container">
      <div className={styles.clockContainer}>
        <motion.div
          animate={{ rotate: `${minuteRotation}deg`, y: "-50%" }}
          className={styles.minutePointer}
        ></motion.div>
        <motion.div
          animate={{ rotate: `${secondRotation}deg`, y: "-50%" }}
          className={styles.secondPointer}
        ></motion.div>
        <div className={styles.timeContainer}>
          {minutes.toString().length == 1 ? `0${minutes}` : minutes}:
          {seconds.toString().length == 1 ? `0${seconds}` : seconds}
        </div>
      </div>
      <ButtonAbort timerFunctions={timerFunctions} />
    </div>
  );
};
export default AnalogTimer;
