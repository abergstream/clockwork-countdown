import React, { useEffect, useState } from "react";
import styles from "./AnalogTimer.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import ButtonAbort from "../../Components/Buttons/Buttons";
// 6 * second
const AnalogTimer = ({ timerFunctions }) => {
  const { timer } = timerFunctions;

  const navigate = useNavigate();

  const seconds = timer.getTimeValues().seconds;
  const minutes = timer.getTimeValues().minutes;

  // Added 1 / 2 to seconds / minutes to get the rotation to work :)
  const [secondRotation, setSecondRotation] = useState(270 + (seconds + 1) * 6);
  const [minuteRotation, setMinuteRotation] = useState(270 + (minutes + 2) * 6);

  useEffect(() => {
    setSecondRotation(270 + seconds * 6);

    if (minutes === 0 && seconds === 0) {
      setMinuteRotation(270 + (minutes + 2) * 6);
    }
  }, [seconds]);

  useEffect(() => {
    setMinuteRotation(minuteRotation - 6);
  }, [minutes]);

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
      </div>
      <ButtonAbort timerFunctions={timerFunctions} />
    </div>
  );
};
export default AnalogTimer;
