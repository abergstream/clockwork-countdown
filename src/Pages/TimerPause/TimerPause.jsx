import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TimerPause.module.css";
const TimerPause = ({ timerFunctions }) => {
  const { timer, setIsPause, startPath } = timerFunctions;
  const navigate = useNavigate();
  const minutes = timer.getTimeValues().minutes;
  const seconds = timer.getTimeValues().seconds;
  return (
    <div className={styles.container}>
      <h2 className={styles.pauseTitle}>Pause & breath</h2>
      <div className={styles.timeLeft}>
        {minutes}.{seconds}
      </div>
      <button
        className={styles.leavePauseButton}
        onClick={() => {
          timer.stop();
          setIsPause(false);
          navigate(startPath);
        }}
      >
        NO PAUSE, GO NOW!
      </button>
      <img className={styles.pauseIcon} src="pauseIcon.svg" />
    </div>
  );
};

export default TimerPause;
