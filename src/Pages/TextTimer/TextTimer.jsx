import React from "react";
import styles from "./TextTimer.module.css";
import { numbersInText } from "../../Components/NumbersInText.jsx";

import ButtonAbort from "../../Components/Buttons/Buttons.jsx";
const TextTimer = ({ timerFunctions }) => {
  const { timer } = timerFunctions;
  const seconds = timer.getTimeValues().seconds;
  const minutes = timer.getTimeValues().minutes;
  const minutesInText = `${numbersInText[minutes]} ${
    minutes != 1 ? "MINUTER" : "MINUT"
  }`;

  const secondsInText = `OCH ${numbersInText[seconds]}`;
  return (
    <div className="container">
      <div className={styles.textTimer}>
        <div>{minutesInText}</div>
        <div> {secondsInText}</div>
        <div>{seconds != 1 ? "SEKUNDER" : "SEKUND"}</div>
      </div>

      <ButtonAbort timerFunctions={timerFunctions} />
    </div>
  );
};

export default TextTimer;
