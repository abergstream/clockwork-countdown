import React, { useEffect, useState } from "react";
import styles from "./AnalogTimer.module.css";
import { motion } from "framer-motion";
import ButtonAbort from "../../Components/Buttons/Buttons";

const AnalogTimer = ({ timerFunctions }) => {
  const { timer } = timerFunctions;

  const seconds = timer.getTimeValues().seconds;
  const minutes = timer.getTimeValues().minutes;

  // Added 2 to seconds so the first useEffect running twice when rendered
  const [secondRotation, setSecondRotation] = useState(270 + (seconds + 2) * 6);
  const [minuteRotation, setMinuteRotation] = useState(270 + minutes * 6);
  useEffect(() => {
    setSecondRotation((prev) => prev - 6);
  }, [seconds]);

  useEffect(() => {
    // setMinuteRotation(270 + (minutes + 1) * 6);
    setMinuteRotation(270 + (minutes + seconds / 60) * 6);
  }, [seconds]);
  return (
    <div className="container">
      <div className={styles.clockContainer}>
        <motion.div
          initial={{ rotate: `${minuteRotation}deg`, y: "-50%" }}
          animate={{ rotate: `${minuteRotation}deg`, y: "-50%" }}
          className={styles.minutePointer}
        ></motion.div>
        <motion.div
          initial={{ rotate: `${secondRotation - 12}deg`, y: "-50%" }}
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
