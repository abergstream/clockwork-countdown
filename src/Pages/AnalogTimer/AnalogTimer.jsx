import React, { useEffect, useState } from "react";
import styles from "./AnalogTimer.module.css";
import { motion } from "framer-motion";
// 6 * second
const AnalogTimer = ({ timer }) => {
  const seconds = timer.getTimeValues().seconds;
  const minutes = timer.getTimeValues().minutes;
  const [secondRotation, setSecondRotation] = useState(-6);
  const [minuteRotation, setMinuteRotation] = useState(270 + (minutes + 2) * 6);
  useEffect(() => {
    setSecondRotation(secondRotation + 6);
    if (minutes === 0 && seconds === 0) {
      setMinuteRotation(270 + (minutes + 2) * 6);
    }
  }, [seconds]);
  useEffect(() => {
    setMinuteRotation(minuteRotation - 6);
  }, [minutes]);
  return (
    <div className={styles.container}>
      <h3>
        {timer.getTimeValues().seconds} {minutes}
      </h3>
      <div className={styles.clockContainer}>
        <motion.div
          animate={{ rotate: `${minuteRotation}deg`, y: "-50%" }}
          className={styles.minutePointer}
        ></motion.div>
        <motion.div
          initial={{ rotate: `270deg`, y: "-50%" }}
          animate={{
            rotate: `${270 - secondRotation}deg`,

            y: "-50%",
          }}
          className={styles.secondPointer}
        ></motion.div>
      </div>
      <button
        onClick={() => {
          setMinuteRotation(270 + (minutes + 2) * 6);
        }}
      >
        {timer.getTimeValues().toString()}
      </button>
    </div>
  );
};
export default AnalogTimer;
