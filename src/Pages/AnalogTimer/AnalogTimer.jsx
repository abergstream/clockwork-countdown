import React, { useEffect, useState } from "react";
import styles from "./AnalogTimer.module.css";
import { motion } from "framer-motion";
import ButtonAbort from "../../Components/Buttons/Buttons";

const AnalogTimer = ({ timerFunctions }) => {
  const calculateRotation = (divideBy) => {
    // divideBy is used for calculating minuteRotation
    const totalUnits =
      (hours * 60 * 60) / divideBy +
      (minutes * 60) / divideBy +
      seconds / divideBy;
    // 6 degrees per unit + 270 to align at the top
    return totalUnits * 6 + 270;
  };

  const { timer } = timerFunctions;

  const seconds = timer.getTimeValues().seconds;
  const minutes = timer.getTimeValues().minutes;
  const hours = timer.getTimeValues().hours;

  const [secondRotation, setSecondRotation] = useState(calculateRotation(1));
  const [minuteRotation, setMinuteRotation] = useState(calculateRotation(60));

  useEffect(() => {
    setSecondRotation(calculateRotation(1));
  }, [seconds]);

  useEffect(() => {
    setMinuteRotation(calculateRotation(60));
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
          initial={{ rotate: `${secondRotation}deg`, y: "-50%" }}
          animate={{ rotate: `${secondRotation}deg`, y: "-50%" }}
          className={styles.secondPointer}
        ></motion.div>
      </div>
      <div className={styles.timeContainer}>
        {hours ? 60 : minutes.toString().length == 1 ? `0${minutes}` : minutes}:
        {seconds.toString().length == 1 ? `0${seconds}` : seconds}
      </div>
      <ButtonAbort timerFunctions={timerFunctions} />
    </div>
  );
};
export default AnalogTimer;
